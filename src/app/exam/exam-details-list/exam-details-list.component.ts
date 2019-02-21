import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { CommonService } from '../../shared/services/common.service';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-exam-details-list',
  templateUrl: './exam-details-list.component.html',
  styleUrls: ['./exam-details-list.component.scss']
})
export class ExamDetailsListComponent implements OnInit {
  @Input() info;
  @Input() underway; // 有进行中的考试
  @Input() submitted; // 有一份试卷交卷失败
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(
    private dialog: ShowdialogService,
    private cs: CommonService,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }


  clickRecord(record) {
    const status = record.paper_status_v4;
    if (status === 1 || status === 3) {
      this.isShowAnser(record);
    } else if (status === 4) {
      this.perusalDialog();
    } else if (status === 2) {
      this.chooseWayToContinue(record);
    }
  }

  // 判断能不能查看正确答案
  isShowAnser(record) {
    const flag3 = this.info.showAnswer; // 查看正确答案
    const flag4 = this.info.showRightOrWrong; // 查看是否回答正确

    if (flag3 || flag4) {
      this.seeExamHistory(record); // 查看历史纪录中的正确答案
    } else if (!(flag3 || flag4)) {
      const msg = '考试结束后不能查看！';
      this.waringDialog(msg);
    }
  }

  // 弹框 批阅中
  perusalDialog() {
    const msg = '试卷批阅中,请稍后查看';
    this.waringDialog(msg);
  }

  // 显示警告框
  waringDialog(msg) {
    const obj = {
      status: -1,
      msgs: [{ msg: msg }]
    };
    this.dialog.warningDialog(obj);
  }

  // 判读是继续考试 还是提交答案
  chooseWayToContinue(record) {
    if (this.submitted) { // 提交失败
      this.postAnswer();
    }
    if (this.underway) { // 进行中
      this.takeTrail();
    }
  }

  // 提交试卷
  postAnswer() {
    this.change.emit(true);
  }

  // 参加考试
  takeTrail() {
    const obj = {
      title: this.info.name,
      eid: this.info.eid,
      paper_eid: this.info.paper_eid,
      api_server: this.info.api_server,
      token: this.info.token,
    };
    const path = '/exam/take';
    this.cs.goTo(path, obj);
  }

  // 查看考试纪录详情
  seeExamHistory(item) {
    const obj = {
      title: this.info.name,
      eid: item.eid,
    };
    const str = JSON.stringify(obj);
    this.storage.setLocal('seePaperHistoryInfo', str);
    const path = '/exam/history';
    this.cs.goTo(path, obj);
  }


}
