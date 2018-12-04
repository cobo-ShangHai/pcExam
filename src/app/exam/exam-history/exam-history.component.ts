import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { ActivatedRoute } from '@angular/router';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.component.html',
  styleUrls: ['./exam-history.component.scss']
})
export class ExamHistoryComponent implements OnInit {
  _eid;
  _info;
  pageTitle = '';
  _curr;
  progressActive = '0%';
  constructor(private dialog: ShowdialogService,
    private route: ActivatedRoute,
    private es: ExamService,
    private cs: CommonService
  ) { }

  ngOnInit() {
    this._curr = 0;
    this.initPage();
  }

  async initPage() {
    await this.handleRouteInfo();
    await this.handleExamHistoryInfo();
    this.setActiveProgress();
  }

  setActiveProgress() {
    if (this._info && this._info.ques) {
      const length = this._info.ques.length;
      const curr = this._curr || 0;
      const num0 = curr + 1;
      const num1 = num0 > length ? length * 100 : num0 * 100;
      const num2 = Math.floor(num1 / length);
      this.progressActive = num2 + '%';
    }
  }

  // 从路由中获取信息后的操作
  async handleRouteInfo() {
    const result: any = await this.getRouterInfo();
    this._eid = result.eid;
    this.pageTitle = result.title;
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise((resolve, reject) => {
      this.route.paramMap.subscribe((info: any) => resolve(info.params));
    });
  }

  getExamHistory() {
    return new Promise((resovle, reject) => {
      this.es.getExamHistory(this._eid).subscribe(data => resovle(data));
    });
  }

  async handleExamHistoryInfo() {
    const result: any = await this.getExamHistory();
    const status = result.status;
    this._info = result;
    if (status === -1) {
      this.waringDialog(result.msgs);
    }

  }

  // 显示警告框
  waringDialog(msgs) {
    const obj = {
      status: -1,
      msgs: msgs
    };
    this.dialog.warningDialog(obj);
  }

  // 上一题
  prevQues() {
    const num = +this._curr - 1;
    this._curr = num > -1 ? num : 0;
    this.setActiveProgress();
  }

  // 下一题
  nextQues() {
    const num = +this._curr + 1;
    const length = this._info.ques.length;
    this._curr = num < length ? num : num - 1;
    this.setActiveProgress();
  }

  getBack() {
    this.cs.getBack();
  }

}
