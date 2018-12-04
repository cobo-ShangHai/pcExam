import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { CommonService } from '../../shared/services/common.service';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-exam-details-abstract',
  templateUrl: './exam-details-abstract.component.html',
  styleUrls: ['./exam-details-abstract.component.scss']
})
export class ExamDetailsAbstractComponent implements OnInit {

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



  // 展示简介详情
  showAllBriefText(msg) {
    const obj = {
      title: '考前须知',
      content: msg,
      type: 'text'
    };
    this.dialog.AmplifyInfo(obj);
  }

  // 参加考试
  takeTrail(eid) {
    const obj = {
      title: this.info.name,
      eid: this.info.eid,
      paper_eid: this.info.paper_eid,
      api_server: this.info.api_server,
      token: this.info.token,
    };
    const str = JSON.stringify(obj);
    this.storage.setLocal('takeExamInfo', str);
    const path = '/exam/take';
    this.cs.goTo(path);
  }

  // 提交试卷
  postAnswer() {
    this.change.emit(true);
  }

}
