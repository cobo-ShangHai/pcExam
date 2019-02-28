import { Injectable } from '@angular/core';
import { MyhttpService } from '../shared/services/myhttp.service';

@Injectable()
export class CycleevaService {

  constructor( private myhttp: MyhttpService) { }

   // 获取360度评估信息
   getCycleevaBriefInfo(eid) {
    const url = '/m/cycleeva/CyclePaper/BO.cobo';
    const obj = {
      action: 'list',
      eparent_id: eid
    };
    return this.myhttp.getData(url, obj);
  }

  // 获取360度评估试卷信息
  getCyCleevaPaper(eid) {
    const url = '/m/cycleeva/CyclePaper/BO.cobo';
    const obj = {
      action: 'answer',
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

  // 提交360度评估
  submitCycleeva(eid, postData) {
    const url = '/m/cycleeva/CyclePaper/BO.cobo';
    const params = {
      action: 'submitByM',
      eid: eid
    };
    const obj = Object.assign(params, postData);
    return this.myhttp.postData(url, obj);
  }

}
