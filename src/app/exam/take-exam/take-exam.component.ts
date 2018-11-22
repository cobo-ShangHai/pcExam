import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExamService } from '../exam.service';
import { QuestionsCatalogComponent } from '../../shared/components/questions-catalog/questions-catalog.component';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.scss'],
})
export class TakeExamComponent implements OnInit {
  _showBack = false;
  pageTitle;
  _examAnswerKey = ''; // 存储答案key值
  _token;
  _api_server;
  _paperFrom; // 判断考试是独立考试，还是来自课程
  _canSubmit = false; // 是不是可以直接提交
  _filledAll = false; // 是不是答完了所有的题目
  _postData = {}; // 所有的答案
  _breifInfo;
  _curr = 0;
  _eid;
  _delayTime = 5000; // 延迟时间
  _answersMap = new Map();

  _endTime = 0;
  _showCountDown = false;
  progressActive = '0%';

  constructor(
    private dialog: ShowdialogService,
    private cs: CommonService,
    private es: ExamService,
    private route: ActivatedRoute,
    public catalog: MatDialog,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.initPaperInfo();
  }

  // 初始化试卷信息
  async initPaperInfo() {
    const result: any[] = await Promise.all([this.getRouterInfo(), this.getEuInfo()]);
    const routeInfo: any = result[0];
    this._eid = routeInfo.eid;
    this.pageTitle = routeInfo.title;
    this._token = routeInfo.token;
    this._api_server = routeInfo.api_server;
    this._examAnswerKey = this._eid + '_' + result[1].selfEid;
    this._delayTime = result[1].paperResultDelay ? result[1].paperResultDelay * 1000 : 5000;
    await this.loadingPaper();
    this.setActiveProgress();
  }

  setActiveProgress() {
    if (this._breifInfo && this._breifInfo.ques) {
      const length = this._breifInfo.ques.length;
      const curr = this._curr || 0;
      const num0 = curr + 1;
      const num1 = num0 > length ? length * 100 : num0 * 100;
      const num2 = Math.floor(num1 / length);
      this.progressActive = num2 + '%';
    }
  }

  // 获取EUInfo
  getEuInfo() {
    return new Promise((resolve, reject) => {
      this.cs.getEuInfo().subscribe(data => resolve(data));
    });
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise((resolve, reject) => {
     const str = this.storage.getLocal('takeExamInfo');
     const obj = JSON.parse(str) || {};
     resolve(obj);
    });
  }

  // 加载试卷信息，及后续处理
  async loadingPaper() {
    const paperInfo: any = await this.getPaperInfo();
    if (paperInfo.code === 200) {
      this.successLoadingPaper(paperInfo.ret);
    } else {
      this.failedLoadingPaper(paperInfo.msg);
    }
  }

  // 从后台获取试卷信息
  getPaperInfo() {
    return new Promise((resovle, reject) => {
      this.es.examPaperInfo(this._api_server, this._token).subscribe(data => resovle(data));
    });
  }

  // 加载试卷信息出错
  failedLoadingPaper(msg) {
    const obj = {
      status: -1,
      msgs: [{ msg: msg }]
    };
    this.dialog.warningDialog(obj);
  }

  // 成功获取试卷信息后的操作
  async successLoadingPaper(data) {
    const result = await this.initQuestionAnswer(data);
    this._breifInfo = result;
    this.startTakeExam();
    this.initAnswersMap(data.ques);
  }

  // 给每一题附送初始答案
  initQuestionAnswer(data) {
    const storage_str = this.storage.getLocal(this._examAnswerKey);
    if (storage_str) {
      const storage_obj: any = JSON.parse(storage_str);
      const ans_obj = JSON.parse(storage_obj.answers);
      const questions = data.ques;
      const length = questions.length;
      if (length) {
        for (let i = 0; i < length; i++) {
          const item = questions[i];
          const id = item.id;
          if (ans_obj.hasOwnProperty(id)) {
            item.initValue = ans_obj[id];
          }
        }
      }
    }
    return data;
  }

  // 初始化答案map
  initAnswersMap(questions) {
    const length = questions.length;
    if (length) {
      for (let i = 0; i < length; i++) {
        const ques = questions[i];
        const value = ques.initValue || '';
        const obj = {
          type: ques.type,
          id: ques.id,
          required: ques.required,
          value: value
        };
        this._answersMap.set(i, obj);
      }
      this.storageAnswers();
    }
  }

  // 告诉后台开始考试
  startTakeExam() {
    const that = this;
    this.es.startTakeExam(this._api_server, this._token).subscribe(data => {
      if (data.code === 200) {
        that._endTime = data.ret.time_left;
      }
    });
  }

  // 更改答案
  changeAnswerMap(event) {
    const ind = event.index;
    if (ind > -1) {
      const obj = this._answersMap.get(ind) || {};
      obj.value = event.value;
      this._answersMap.set(ind, obj);
      this.storageAnswers();
    }
  }

  // 上一题
  prevQues() {
    const num = +this._curr - 1;
    this._curr = num > -1 ? num : 0;
    this.postAnswers();
    this.setActiveProgress();
  }

  // 下一题
  nextQues() {
    const num = +this._curr + 1;
    const length = this._breifInfo.ques.length;
    this._curr = num < length ? num : num - 1;
    this.postAnswers();
    this.setActiveProgress();
  }

  // 设置答案
  setAnswers() {
    const postData = {};
    this._canSubmit = true;
    this._filledAll = true;
    this._answersMap.forEach((obj, key) => {
      if (obj) {
        const array: any[] = obj.value || [];
        const length = array.length;
        if (length > 0) {
          obj.noAnswer = false;
          const postKey = '' + obj.id;
          postData[postKey] = array;
        } else {
          this._filledAll = false;
          obj.noAnswer = true;
          if (obj.required) {
            this._canSubmit = false;
          }
        }
        this._answersMap.set(key, obj);
      }
    });
    return postData;
  }

  /**
   * @param {any} [isLastChance] 用来判断是不是交卷前的最后一次提交答案
   * @memberof TakeExamComponent
   */
  async postAnswers(isLastChance = false) {
    const that = this;
    const answers = this.setAnswers();
    const ans_str = JSON.stringify(answers);
    const data: any = await this.doPostAnswer(ans_str);
    if (isLastChance) {
      if (data.code === 200) {
        that.doSubmit();
      } else {
        that.postAnswersFalied(data[1].msg);
      }
    }
  }

  // 存储答案
  storageAnswers(isLastChance = false) {
    const answers = this.setAnswers();
    const ans_str = JSON.stringify(answers);
    const storage_obj = {
      server: this._api_server,
      token: this._token,
      isLastChance: isLastChance,
      answers: ans_str
    };
    const storage_obj_str = JSON.stringify(storage_obj);
    this.storage.setLocal(this._examAnswerKey, storage_obj_str);
  }

  // 提交答案
  doPostAnswer(answers) {
    const obj = {
      server: this._api_server,
      token: this._token,
      answers: answers
    };
    return new Promise((resovle, reject) => {
      this.es.postAnswer(obj).subscribe(data => resovle(data));
    });
  }


  // 提交答案失败
  postAnswersFalied(msg) {
    const obj = {
      status: -1,
      msgs: [{ 'msg': msg }]
    };
    this.dialog.warningDialog(obj);
  }



  // 确认提交
  confirmSubit() {
    const obj = {
      title: '确认提交',
      text: '您是否确认需要提交？'
    };
    this.dialog.confrimDialog(obj).subscribe(
      data => {
        if (data) {
          this.prepareSubmit();
        }
      }
    );
  }

  // 交卷前的准备工作
  async prepareSubmit() {
    const data = await this.setAnswers();
    this._postData = data;
    if (this._filledAll) {
      this.postAnswers(true);
    } else {
      this.openCatalog();
    }
  }

  // 打开未完成项目的目录
  openCatalog() {
    const dialogRef = this.catalog.open(QuestionsCatalogComponent, {
      height: '80%',
      width: '80%',
      data: {
        canSubmit: this._canSubmit,
        text: '只有完成必答题才可以提交，您可以点击列表跳转到对应的题目进行答题',
        map: this._answersMap
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'dosub') {
        this.postAnswers(true);
      } else {
        if (result && +result > 0) {
          this._curr = result;
        }
      }
    });
  }

  // 交卷
  doSubmit() {
    this.es.submitExam(this._api_server, this._token).subscribe(data => {
      if (data.code === 200) {
        this.sumitSucceeText();
      } else {
        this.submitFalied(data);
      }
    });
  }

  // 交卷失败
  submitFalied(obj0) {
    let obj;
    if (obj0.msgs) {
      obj = obj0;
    } else {
      obj = {
        status: -1,
        msgs: [{ 'msg': '提交失败' }]
      };
    }
    this.dialog.warningDialog(obj);
  }

  // 交卷成功
  sumitSucceeText() {
    const obj = {
      timeLimit: this._delayTime,
      status: 999,
      msgs: [{ msg: '提交成功' }]
    };
    this.dialog.warningDialog(obj);
    setTimeout(() => {
      this.storage.removeLocal(this._examAnswerKey);
      this.storage.removeLocal('takeExamInfo');
      this.cs.getBack();
    }, this._delayTime);
  }

  // 监听倒计时
  listernCountDown(event) {
    if (event && event.timeOut && this._endTime > -1) {
      this.postAnswers(true);
    }
  }

}
