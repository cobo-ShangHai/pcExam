import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EvaService } from '../eva.service';
import { QuestionsCatalogComponent } from '../../shared/components/questions-catalog/questions-catalog.component';

@Component({
  selector: 'app-take-eva',
  templateUrl: './take-eva.component.html',
  styleUrls: ['./take-eva.component.scss']
})
export class TakeEvaComponent implements OnInit {
  pageTitle;
  _canSubmit = false; // 是不是可以直接提交
  _filledAll = false; // 是不是答完了所有的题目
  _postData = {}; // 所有的答案
  _eid;
  _breifInfo;
  _curr = 0;
  _answersMap = new Map();

  constructor(
    private dialog: ShowdialogService,
    private cs: CommonService,
    private es: EvaService,
    private route: ActivatedRoute,
    public catalog: MatDialog
  ) { }

  ngOnInit() {
    this.prepareLoadingInfo();
  }

  // 从路由中获取信息后的操作
  prepareLoadingInfo() {
    const that = this;
    Promise.all([this.getRouterInfo()]).then(
      (result: any[]) => {
        const obj0 = result[0];
        that._eid = obj0.eid;
        that.pageTitle = obj0.title;
      }
    ).then(
      () => that.paperInfo()
    );
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise(
      (resolve, reject) => {
        this.route.paramMap.subscribe(
          (info: any) => {
            resolve(info.params);
          }
        );
      }
    );
  }

  // 获取评估试卷信息
  paperInfo() {
    this.es.getEvaPaper(this._eid).subscribe(
      data => this.afterGetPaperInfo(data)
    );
  }

  // 获取试卷信息后的操作
  afterGetPaperInfo(data) {
    this._breifInfo = data;
    if (data.status === 0) {
      this.initAnswersMap(data.questions);
    }
  }

  // 初始化答案map
  initAnswersMap(questions) {
    const length = questions.length;
    if (length) {
      for (let i = 0; i < length; i++) {
        const ques = questions[i];
        const obj = {
          type: ques.type,
          eid: ques.eid,
          required: ques.required,
          value: ''
        };
        this._answersMap.set(i, obj);
      }
    }
  }

  // 更改答案
  changeAnswerMap(event) {
    const ind = event.index;
    if (ind > -1) {
      const obj = this._answersMap.get(ind) || {};
      obj.value = event.value;
      this._answersMap.set(ind, obj);
    }
  }

  // 上一题
  prevQues() {
    const num = +this._curr - 1;
    this._curr = num > -1 ? num : 0;
  }

  // 下一题
  nextQues() {
    const num = +this._curr + 1;
    const length = this._breifInfo.questions.length;
    this._curr = num < length ? num : num - 1;
  }

  // 设置答案
  setAnswers() {
    const postData = {};
    this._canSubmit = true;
    this._filledAll = true;
    this._answersMap.forEach((obj, key) => {
      if (obj) {
        if ((obj.value === undefined || obj.value === '' || obj.value === null)) {
          this._filledAll = false;
          obj.noAnswer = true;
          if (obj.required) {
            this._canSubmit = false;
          }
        } else {
          obj.noAnswer = false;
        }
        this._answersMap.set(key, obj);
      }
      const type = obj.type;
      if (type === 'SINGLE_CHOICE' || type === 'MULTI_CHOICE' || type === 'FIB' || type === 'RE_ORDER' || type === 'SCORE') {
        postData['data(' + obj.eid + ')'] = obj.value || '';
      } else {
        postData['data(' + obj.eid + '_other)'] = obj.value || '';
      }
    });
    return postData;
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

  // 提交前的准备工作
  async prepareSubmit() {
    const data = await this.setAnswers();
    this._postData = data;
    if (this._filledAll) {
      this.doSubmit();
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
        this.doSubmit();
      } else {
        if (result && +result > 0) {
          this._curr = result;
        }
      }
    });
  }

  // 提交
  doSubmit() {
    const eid = this._breifInfo.eid;
    this.es.submitEva(eid, this._postData).subscribe(
      data => {
        if (data.status === 1) {
          this.sumitSucceeText();
        } else if (data.status === -1) {
          this.submitFalied(data);
        }

      }
    );
  }

  // 提交失败
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

  // sumitText
  sumitSucceeText() {
    const obj = {
      status: 999,
      msgs: [{ msg: '提交成功' }]
    };
    this.dialog.warningDialog(obj);
    setTimeout(() => {
      this.cs.getBack();
    }, 4000);
  }


}