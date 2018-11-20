import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../services/common.service';

@Pipe({
  name: 'getMapValues'
})
export class GetMapValuesPipe implements PipeTransform {
  constructor(public cs: CommonService) {

  }

  transform(map: Map<any, any>, sort?: string): any[] {
    const result = [];
    map.forEach((value, key) => {
      const obj = {
        key: key,
        value: value
      };
      result.push(obj);
    });

    return result;
  }

}
