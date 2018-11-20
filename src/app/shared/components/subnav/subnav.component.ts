import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss'],
  providers: [WindowRefService]
})
export class SubnavComponent implements OnInit {
  nativeWindow: any;
  @Input() showBack;
  @Input() title;
  @Input() padLeft; // 自定义到左边的距离

  customStyle; // 自定义样式

  constructor(
    private location: Location,
    private cs: CommonService,
    private winRef: WindowRefService
  ) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  ngOnInit() {
    this.customStyle = {};
    if (this.padLeft) {
      const str = this.padLeft + 'px';
      this.customStyle['padding-left'] = str;
    }
  }

  getBack() {
    const obj1 = this.nativeWindow;
    const num = window.history.length;
    if (num > 1) {
      this.location.back();
    } else {
      const path = '/homepage';
      this.cs.goTo(path);
    }
  }
}
