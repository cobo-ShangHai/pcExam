import { Injectable } from '@angular/core';
import { MyhttpService } from '../shared/services/myhttp.service';

@Injectable()
export class EvaService {

  constructor(private myhttp: MyhttpService) { }

  // 获取评估的基本信息
  getEvaBrief(eid) {
    const url = '/m/evaluation/Paper/BO.cobo';
    const obj = {
      action: 'notice',
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

  // 获取评估试卷信息
  getEvaPaper(params) {
    const url = '/m/evaluation/Paper/BO.cobo';
    const obj = {
      action: 'answerEva',
      param: 'fromNotice'
    };
    Object.assign(obj, params);
    return this.myhttp.getData(url, obj);
  }

  // 提交评估信息
  submitEva(eid, postData) {
    const url = '/m/evaluation/Paper/BO.cobo';
    const params = {
      action: 'submitByM',
      eid: eid
    };
    const obj = Object.assign(params, postData);
    return this.myhttp.postData(url, obj);
  }

  // 获取评估统计信息
  getStatisticsInfo(eid) {
    const url = '/m/evaluation/Evaluation/BO.cobo';
    const obj = {
      action: 'viewsum',
      eid: eid
    };
    return this.myhttp.postData(url, obj);
  }

}
