import { Injectable } from '@angular/core';
import { MyhttpService } from '../shared/services/myhttp.service';
@Injectable()
export class ExerciseService {

  constructor(
    private myhttp: MyhttpService
  ) { }

  // 测验考试的数据
  loadingExercisePaper(eid) {
    const url = '/m/cpaper/CPaper/BO.cobo';
    const obj = {
      action: 'test',
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

}
