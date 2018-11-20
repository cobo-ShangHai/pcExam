import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { StorageService } from '../../shared/services/storage.service';
import { ExerciseService } from '../exercise.service';



@Component({
  selector: 'app-take-exercise',
  templateUrl: './take-exercise.component.html',
  styleUrls: ['./take-exercise.component.scss']
})
export class TakeExerciseComponent implements OnInit {
  pageTitle;
  _eid;
  _examAnswerKey = ''; // 存储答案key值
  _answersMap = new Map();
  _breifInfo;
  _curr = 0;

  constructor(
    private route: ActivatedRoute,
    private es: ExerciseService,
    private cs: CommonService,
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
    this._examAnswerKey = this._eid + '_' + result[1].selfEid;
    this.storage.removeSession(this._examAnswerKey);
    await this.loadingPaper();
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
      const str = this.storage.getLocal('takeExerciseInfo');
      const obj = JSON.parse(str) || {};
      resolve(obj);
    });
  }

  // 加载试卷信息，及后续处理
  async loadingPaper() {
    const data: any = await this.getPaperInfo();
    this._breifInfo = data;
    this.initAnswersMap(data.questions);
  }

  // 从后台获取试卷信息
  getPaperInfo() {
    return new Promise((resovle, reject) => {
      this.es.loadingExercisePaper(this._eid).subscribe(data => resovle(data));
    });
  }

  // 初始化答案map
  initAnswersMap(questions) {
    const length = questions.length;
    if (length) {
      for (let i = 0; i < length; i++) {
        const ques = questions[i];
        this._answersMap.set(i, ques);
      }
    }
  }

  // 更改答案
  changeAnswerMap(event) {
    const ind = event.index;
    if (ind > -1) {
      const obj = this._answersMap.get(ind) || {};
      obj.yourAnswer = event.value;
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
    const postData = [];
    this._answersMap.forEach((obj, key) => {
      postData.push(obj);
    });
    return postData;
  }

  // 存储答案
  storageAnswers() {
    const answers = this.setAnswers();
    const ans_str = JSON.stringify(answers);
    const storage_obj = {
      answers: ans_str
    };
    const storage_obj_str = JSON.stringify(storage_obj);
    this.storage.setSession(this._examAnswerKey, storage_obj_str);
  }

  confirmSubit() {
    this.storageAnswers();
    this.storage.removeLocal('takeExerciseInfo');
    this.cs.getBack();
  }

}
