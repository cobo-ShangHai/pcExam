import { Injectable } from '@angular/core';
import { MyhttpService } from '../shared/services/myhttp.service';

@Injectable()
export class VoteService {

  constructor(
    private myhttp: MyhttpService
  ) { }

  // 获取投票明细
  voteDetails(eid) {
    const url = '/m/ajax/voteview.cobo';
    const obj = {
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

  submitVote(eid, postData) {
    const url = '/m/vote/Vote/BO.cobo';
    const params = {
      action: 'submitM',
      eid: eid
    };
    const obj = Object.assign(params, postData);
    return this.myhttp.postData(url, obj);
  }


}
