import { Component, OnInit, AfterViewInit, Input, OnDestroy, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() endTime; // 考试的值单位是分钟
  @Output() change: EventEmitter<any> = new EventEmitter();

  private _timer; // 计时器
  private _initTime; // 初始及时时间
  public _countValue ;
  constructor(
    private cs: CommonService
  ) { }

  ngOnInit() {

  }


  ngAfterViewInit() {
    if (this.endTime) {
      this.getDiff();
    }
  }

  // 计算时间差
  getDiff() {
    this._initTime = this.cs.getCurrentTime();
    this._timer = setInterval(() => {
      const num1 = this.endTime * 1000;
      const curr = this.cs.getCurrentTime();
      const num2 = this.cs.subtractTime(this._initTime, curr);
      const num3 = num1 - num2;
      if (num3 > 0) {
        this._countValue = this.cs.gethms(num3);
      } else {
        this._countValue = this.cs.gethms(0);
        this.timeOut();
      }
    }, 1000);
  }

  // 如果倒计时为0
  timeOut() {
    const obj = {
      timeOut: true
    };
    this.change.emit(obj);
    this.clearTimer();
  }

  // 销毁组件时清除定时器
  clearTimer() {
    if (this._timer) {
      clearInterval(this._timer);
    }
  }


  ngOnDestroy() {
    this.clearTimer();
  }



}
