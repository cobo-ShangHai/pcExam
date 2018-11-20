import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common.service';




interface Collected {
  flag: boolean; // 判断是否被收藏
  eid: string; // 收藏的eid类型
  linktype: string; // 判断收藏的数据类型
}

@Component({
  selector: 'app-store-up',
  templateUrl: './store-up.component.html',
  styleUrls: ['./store-up.component.scss']
})

export class StoreUpComponent implements OnInit {
  @Input() collected: Collected;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(
    private cs: CommonService
  ) { }

  ngOnInit() {
  }

  toggledCollect() {
    const that = this;
    const flag = this.collected.flag;
    const param = flag ? 'delete' : 'save';
    const obj = {
      param: param,
      eid: this.collected.eid,
      linktype: this.collected.linktype
    };
    return this.cs.toggleCollected(obj).subscribe(data => {
      this.collected.flag = !this.collected.flag;
    });
  }

}
