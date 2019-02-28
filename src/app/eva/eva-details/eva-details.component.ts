import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { EvaService } from '../eva.service';

@Component({
  selector: 'app-eva-details',
  templateUrl: './eva-details.component.html',
  styleUrls: ['./eva-details.component.scss']
})
export class EvaDetailsComponent implements OnInit {
  _eid;
  _breifInfo;
  _sotredUp: any; // 收藏数据

  constructor(
    private cs: CommonService,
    private es: EvaService,
    private route: ActivatedRoute,
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
    this.prepareLoadingInfo();
  }

  // 从路由中获取信息后的操作
  prepareLoadingInfo() {
    const that = this;
    Promise.all([this.getRouterInfo()]).then(
      (result: any[]) => {
        const obj0 = result[0];
        that._eid = obj0.eid;
      }
    ).then(
      () => that.getEvaInfo()
    );
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise(
      (resolve, reject) => {
        this.route.paramMap.subscribe(
          (info: any) => {
            resolve(info.params);
          }
        );
      }
    );
  }

  // 获取评估信息
  getEvaInfo() {
    this.es.getEvaBrief(this._eid).subscribe(
      data => {
        this.afterGetEvaInfo(data);
      }
    );
  }

  // 获取评估消息的后续操作
  afterGetEvaInfo(data) {
    if (data.status === 0) {
      const now = this.cs.getCurrentTime();
      if (data.begin) {
        const str = data.begin;
        data.notStart = this.cs.compareTime(str, now);
      }
      if (data.end) {
        const str = data.end;
        data.isEnd = this.cs.compareTime(now, str);
      }
    } else if (data.status === -1) {
      const obj = {
        status: -1,
        msgs: data.msgs
      };
      this.dialog.warningDialog(obj);
    } else if (data.status === -20) { // 没有权限

    }
    this._breifInfo = data;
    this.setStoredUpData();
  }

  // 设置收藏课程的数据
  setStoredUpData() {
    this._sotredUp = {};
    this._sotredUp.flag = this._breifInfo.favorited;
    this._sotredUp.eid = this._eid;
    this._sotredUp.linktype = 'eva';
  }




}
