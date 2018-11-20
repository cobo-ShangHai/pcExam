import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indextochar'
})
export class IndextocharPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > -1) {
      const num1 = parseInt(value, 10);
      const num2 = num1 + 65;
      return String.fromCharCode(num2);
    }
    return null;
  }

}
