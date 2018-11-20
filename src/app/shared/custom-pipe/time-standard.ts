import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../services/common.service';

@Pipe({ name: 'timeStandard' })

export class TimeStandard implements PipeTransform {

  constructor(private commonService: CommonService) {

  }

  // fm 需要返回的数据类型
  // fm: ymd 返回 xxxx年xx月 xx 日
  // fm: sprit 返回 xxxx/xx/ xx 日
  // fm: ymd 返回 xxxx年xx月 xx 日
  // fm: ymd 返回 xxxx年xx月 xx 日
  transform(value: string, fm?: string): any {
    if (value && value !== undefined && value !== '') {
      if (fm === 'ymd') {
        return this.commonService.getYMD(value);
      } else if (fm === 'sprit') {
        return this.commonService.GetDateDiff(value);
      } else if (fm === 'millseconds') {
        return this.commonService.getMillSecond(value);
      } else if (fm === 'md') {
        return this.commonService.getMD(value);
      } else if (fm === 'HM') {
        return this.commonService.getHM(value);
      } else if (fm === 'standard') {
        return this.commonService.coboTimeStand(value);
      } else {
        return this.commonService.referenceTime(value);
      }
    } else {
      return value;
    }
  }

}
