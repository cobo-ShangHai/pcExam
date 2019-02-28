import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaService } from '../eva.service';

@Component({
  selector: 'app-statistics-details',
  templateUrl: './statistics-details.component.html',
  styleUrls: ['./statistics-details.component.scss']
})
export class StatisticsDetailsComponent implements OnInit {
  _curr;
  _eid;
  _info;
  pageTitle = '';

  constructor(
    private route: ActivatedRoute,
    private es: EvaService
  ) { }

  ngOnInit() {
    this.prepareLoadingInfo();
  }

  // 从路由中获取信息后的操作
  async prepareLoadingInfo() {
    const fun1 = this.getRouterInfo();
    try {
      const results = await Promise.all([fun1]);
      const obj0: any = results[0];
      if (obj0) {
        this._curr = +obj0.curr || 0;
        this._eid = obj0.eid;
        this.getInfo();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise((resolve, reject) => {
      this.route.paramMap.subscribe((info: any) => {
        if (info && info.params) {
          resolve(info.params);
        } else {
          reject('没有获取到参数');
        }
      });
    });
  }

  getInfo() {
    this.es.getStatisticsInfo(this._eid).subscribe(info => {
      this.pageTitle = info.name;
      this._info = info;
    });
  }

  // 上一题
  prevQues() {
    const num = +this._curr - 1;
    this._curr = num > -1 ? num : 0;
  }

  // 下一题
  nextQues() {
    const num = +this._curr + 1;
    const length = this._info.questions.length;
    this._curr = num < length ? num : num - 1;
  }

}
