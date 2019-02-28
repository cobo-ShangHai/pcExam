import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-cycleeva-details-sheet',
  templateUrl: './cycleeva-details-sheet.component.html',
  styleUrls: ['./cycleeva-details-sheet.component.scss']
})
export class CycleevaDetailsSheetComponent implements OnInit {
  @Input() info;
  constructor(
    private cs: CommonService
  ) { }

  ngOnInit() {
  }

  // 参加评估
  takeTrail(eid) {
    const obj = {
      title: this.info.name
    };
    const path = '/cycleeva/take/' + eid;
    this.cs.goTo(path, obj);
  }

}
