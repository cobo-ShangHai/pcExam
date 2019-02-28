import { Component, OnInit, Input } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';


@Component({
  selector: 'app-cycleeva-details-brief',
  templateUrl: './cycleeva-details-brief.component.html',
  styleUrls: ['./cycleeva-details-brief.component.scss']
})
export class CycleevaDetailsBriefComponent implements OnInit {
@Input() info;
  constructor(
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
  }

   // 展示简介详情
   showAllBriefText(msg) {
    const obj = {
      title: '360度评估简介',
      content: msg,
      type: 'text'
    };
    this.dialog.AmplifyInfo(obj);
  }
}
