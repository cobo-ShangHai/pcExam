import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaService } from '../eva.service';
import { CommonService } from '../../shared/services/common.service';



@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {
  pageTitle = '';
  _eid;
  _info;
  constructor(
    private route: ActivatedRoute,
    private es: EvaService,
    private cs: CommonService
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

  seeDetails(index) {
    const obj = {
      eid: this._eid,
      curr: index
    };
    const path = '/eva/statisticsDetails';
    this.cs.goTo(path, obj);
  }

}
