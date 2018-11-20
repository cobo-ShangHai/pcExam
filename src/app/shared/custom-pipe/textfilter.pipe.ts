import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textfilter'
})
export class TextfilterPipe implements PipeTransform {
  //  array: 需要过滤的数组
  //  key: 过滤的关键字 例如：_searchText
  //  param: 和哪一项做对比

  transform(array: any[], key?: string, param?: string): any {
    if (!array) {
      return [];
    }
    if (!key) {
      return array;
    }

    return array.filter(item => {
      if (param) {
        const flag1 = item[param] === key;
        const flag2 = item[param].includes(key);
        return flag1 || flag2;
      } else {
        const flag1 = item === key;
        const flag2 = item.includes(key);
        return flag1 || flag2;
      }
    });
  }

}
