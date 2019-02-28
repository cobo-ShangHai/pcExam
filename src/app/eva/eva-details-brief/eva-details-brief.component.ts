import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
@Component({
  selector: 'app-eva-details-brief',
  templateUrl: './eva-details-brief.component.html',
  styleUrls: ['./eva-details-brief.component.scss']
})
export class EvaDetailsBriefComponent implements OnInit {
  @Input() info;
  constructor(
    private cs: CommonService,
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
  }


  // 展示简介详情
  showAllBriefText(msg) {
    const obj = {
      title: '评估简介',
      content: msg,
      type: 'text'
    };
    this.dialog.AmplifyInfo(obj);
  }

  // 参加评估
  takeTrail(eid) {
    const obj = {
      title: this.info.name
    };
    const path = '/eva/take/' + eid;
    this.cs.goTo(path, obj);
  }

  // 查看统计信息
  viewStatistics(eid) {
    const path = '/eva/statisticsList';
    const obj = {
      eid: eid
    };
    this.cs.goTo(path, obj);
  }


}
