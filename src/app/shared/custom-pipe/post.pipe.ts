import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../services/common.service';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {
  constructor(public cs: CommonService) {

  }
  transform(value: any, args?: any): any {
    if (value && value !== undefined && value !== '') {
      const temp1 = this.cs.quote(value);
      const temp2 = this.cs.smile(temp1);
      const temp3 = this.cs.image(temp2);
      const temp4 = this.cs.link(temp3);
      const temp5 = this.cs.basedRN(temp4);
      return temp5;
    }
    return null;
  }
}
