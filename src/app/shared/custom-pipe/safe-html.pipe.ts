import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(
    private sanitized: DomSanitizer,
    public cs: CommonService
  ) { }
  transform(value: any, args?: any): any {
    if (value) {
      const temp1 = this.cs.smile(value);
      const temp2 = this.cs.image(temp1);
      const temp3 = this.cs.link(temp2);
      const temp4 = this.cs.basedRN(temp3);
      return this.sanitized.bypassSecurityTrustHtml(temp4);
    }
    return null;
  }
}
