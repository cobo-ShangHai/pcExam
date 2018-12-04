import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { ExamService } from '../exam.service';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class ExamDetailsComponent implements OnInit {
  _eid;
  _breifInfo;
  _sotredUp: any; // 收藏数据
  _isUnderway = false; // 有进行中的考试
  _isSubmitted = false; // 有一份试卷交卷失败

  _examAnswerKey = ''; // 存储答案key值

  constructor(
    private cs: CommonService,
    private es: ExamService,
    private route: ActivatedRoute,
    private dialog: ShowdialogService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.initPage();
  }

  // 页面初始化需要处理的一些东西
  async initPage() {
    const result: any[] = await Promise.all([this.getRouterInfo(), this.getEuInfo()]);
    this._eid = result[0].eid;
    this._examAnswerKey = this._eid + '_' + result[1].selfEid;
    await this.handleExamInfo();
    this.handleLocalAnswers();
    this.setStoredUpData();
  }


  // 获取路由信息
  getRouterInfo() {
    return new Promise((resolve, reject) => {
      this.route.paramMap.subscribe((info: any) => resolve(info.params));
    });
  }

  // 获取EUInfo
  getEuInfo() {
    return new Promise((resolve, reject) => {
      this.cs.getEuInfo().subscribe(data => resolve(data));
    });
  }


  // 判断是不是有提交失败的答案
  handleLocalAnswers() {
    const str = this.storage.getLocal(this._examAnswerKey);
    if (str) {
      const paper_eid = this._breifInfo.paper_eid;
      const obj = JSON.parse(str);
      const flag1 = obj.isLastChance; // 已经点击交卷
      const flag2 = (obj.paper_eid === paper_eid); // true 还可以考试
      if (flag1) {
        this._isSubmitted = true;
        this._isUnderway = false;
      } else {
        if (flag2) {
          this._isSubmitted = false;
          this._isUnderway = true;
        } else {
          this._isSubmitted = true;
          this._isUnderway = false;
        }
      }
    }
  }

  // 准备提交答案到后台
  async handleAnswers() {
    const str = this.storage.getLocal(this._examAnswerKey) || '{}';
    const obj = JSON.parse(str);
    const _postInfo: any = await this.postAnswerLater(obj);
      this._isSubmitted = false;
      this._isUnderway = false;
      this.storage.removeLocal(this._examAnswerKey);
  }

  // 补交答案
  postAnswerLater(params) {
    const obj = {
      action: 'makeupSubmit',
      eid: params.paper_eid,
      param: params.answers
    };
    return new Promise((resovle, reject) => {
      this.es.postAnswerLater(obj).subscribe(data => resovle(data));
    });
  }



  // 加载考试信息
  loadingExamInfo() {
    return new Promise((resolve, reject) => {
      this.es.examBriefInfo(this._eid).subscribe(data => resolve(data));
    });
  }

  successLoadingExamInfo(data) {
    const now = this.cs.getCurrentTime();
    if (data.begin) {
      const str = data.begin;
      const flag = this.cs.compareTime(str, now);
      data.notStart = flag;
      if (flag) {
        data.distanceTime = this.cs.timeDifferance(now, str);
      }
    }
    if (data.end) {
      const str = data.end;
      data.isEnd = this.cs.compareTime(now, str);
    }
    return data;
  }

  failedLoadingExamInfo(data) {
    const obj = {
      status: -1,
      msgs: data.msgs
    };
    this.dialog.warningDialog(obj);
  }

  // 处理加载后的考试信息
  async handleExamInfo() {
    let data: any = await this.loadingExamInfo();
    if (data.status === 0) {
      data = this.successLoadingExamInfo(data);
    } else if (data.status === -1) {
      this.failedLoadingExamInfo(data);
    } else if (data.status === -20) { // 没有权限

    }
    this._breifInfo = data;
  }



  // 设置收藏课程的数据
  setStoredUpData() {
    this._sotredUp = {};
    this._sotredUp.flag = this._breifInfo.favorited;
    this._sotredUp.eid = this._eid;
    this._sotredUp.linktype = 'exam';
  }

  // 自动提交失败后，手动交卷
  async repostAnswer(event) {
    if (event) {
      await this.handleAnswers();
      await this.handleExamInfo();
    }
  }

}
