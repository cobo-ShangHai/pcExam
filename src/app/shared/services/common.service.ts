import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { Location } from '@angular/common';
import { MyhttpService } from './myhttp.service';
import { StorageService } from './storage.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  public newParams = {
    version: 'v4.0'
  };

  constructor(
    private myhttp: MyhttpService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }


  // 清除表单某一项值
  resetFormData(key: string, obj: any): any {
    obj[key] = '';
    return obj;
  }

  // 获取EU 信息
  getEuInfo(): Observable<any> {
    const _url = '/m/ajax/getEUStyle.cobo';
    return this.myhttp.getData(_url);
  }


  // 跳转
  goTo(path, data?): void {
    if (data) {
      this.router.navigate([path, data]);
    } else {
      this.router.navigate([path]);
    }
  }

  // 返回
  getBack() {
    this.location.back();
  }

  // http://home.cobocn.net/m/logon.cobo?token=kMy4HqApfME&version=v4.0
  // 判断token 是否有效
  isTokenEffective(token): Observable<any> {
    const _url = '/m/logon.cobo';
    const obj = { token: token };
    return this.myhttp.getData(_url, obj).map(
      (res: any) => {
        if (res && res.status === 0) {
          return true;
        } else {
          return false;
        }
      }
    );
  }

  // 从seession 中获取跳转路径,并且跳转过去
  getPathFromLocal(key) {
    let flag = false;
    const targetUrl = this.storageService.getLocal(key);
    if (targetUrl) {
      flag = false;
      const array = targetUrl.split(';');
      const [path, ...rest] = array;
      const obj = {};
      rest.forEach(element => {
        const temp = element.split('=');
        const k = temp[0];
        const v = temp[1];
        obj[k] = v;
      });
      this.goTo(path, obj);
      this.storageService.removeLocal(key);
    } else {
      flag = true;
    }
    return flag;
  }

  isJsonFormat(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * 论坛
   */
  smile(str) {
    let rstr = '';
    if (str) {
      const str1 = str.toString().replace(/\[smiley\]/g, '<img src="/static/smileyImage/smiley-');
      rstr = str1.replace(/\[\/smiley\]/g, '.png">');
    }
    return rstr;
  }

  image(str) {
    let rstr = '';
    if (str) {
      const str1 = str.toString().replace(/\[image\]/g, '<img src="');
      const str2 = str1.replace(/\[\/image\]/g, '" alt="" class="maxwidth100" />');
       // 去除所有图片的内置的宽和高
       rstr = str2.replace(/<img[^>]*>/gi, (match,  capture)  => {
        const temp1 = match.replace(/width\s*?=\s*?([‘"])[\s\S]*?\1/ig,  '');
        const temp2 = temp1.replace(/height\s*?=\s*?([‘"])[\s\S]*?\1/ig,  '');
        return  temp2;
      });
    }
    return rstr;
  }

  quote(str) {
    let rstr = '';
    const num0 = str.toString().indexOf('[quote]');
    const flag0 = num0 > -1;
    if (flag0) {
      const arr = str.split('[quote]');
      rstr += arr[0];
      const temp1 = arr[1];
      const temp2 = temp1.replace('原帖由 ', '<div><span class="color3 fsize4">');
      const temp3 = temp2.replace(' 于 ', '</span><span class="pad5_l">');
      const temp4 = temp3.replace('发表', '</div>');
      const temp5 = temp4.replace('[/quote]', '');
      rstr += '<div class="pad5 bgcolorc">' + temp5 + '</div>';
    } else {
      rstr = str;
    }
    return rstr;
  }

  link(str) {
    let rstr = '';
    const num0 = str.toString().indexOf('[link]');
    const flag0 = num0 > -1;
    if (flag0) {
      const array = str.match(/\[link\].+?\[\/link\]/g);
      for (const i in array) {
        if (array[i]) {
          const temp = array[i];
          const temp1 = temp.replace('[link]', '');
          const temp2 = temp1.replace('[/link]', '');
          const arr = temp2.split('$$$');
          const temp3 = '<a href="' + arr[1] + '" class="color-blue">' + arr[0] + '</a>';
          str = str.replace(temp, temp3);
        }
      }
    }
    rstr = str;
    return rstr;
  }

  // 过滤数组钟的空字符串
  filterNullArray(arr) {
    return arr.filter(d => !(d === undefined || d === null || d === ''));
  }

  basedRN(str) {
    let rstr = '';
    if (str) {
      rstr = str.replace(/(\r\n)|(\n)/g, '<br>');
    }
    return rstr;
  }

  /**
   * 论坛--结束
   */

  /**
  * 时间处理 -- 开始
  */

  // 正邦输出时间格式 将xxxx-xx-xx的时间格式，转换为 xxxx.xx.xx的格式
  coboTimeStand(timestr) {
    return timestr.replace(/\-/g, '.');
  }

  // 获取当前时间
  getCurrentTime() {
    const date = new Date();
    const str = this.getTimeStr(date);
    return str;
  }

  getTimeStr(date) {
    const Y = date.getFullYear() + '/';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const str = Y + M + D + h + m + s;
    return str;
  }

  // 兼容苹果 将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
  GetDateDiff(timestr) {
    return timestr.replace(/\-/g, '/');
  }

  // 获取毫秒数
  getMillSecond(str) {
    const timestr = this.GetDateDiff(str);
    const time = new Date(timestr);
    return time.getTime();
  }

  // 计算两个时间差
  subtractTime(time1, time2) {
    const num1 = this.getMillSecond(time1);
    const num2 = this.getMillSecond(time2);
    const num = num2 - num1;
    return num;
  }

  // 比较两个时间
  compareTime(time1, time2) {
    const num1 = this.getMillSecond(time1);
    const num2 = this.getMillSecond(time2);
    const flag = num1 > num2;
    return flag;
  }

  // 计算两个时间差
  timeDifferance(time1, time2) {
    // const num = num2 - num1;
    const num = this.subtractTime(time1, time2);
    const num1 = 1000;
    const num2 = 60 * num1; // 1分钟
    const num3 = 60 * num2; // 1小时
    const num4 = 24 * num3; // 1天
    const num5 = 30 * num4; // 1月

    if (num < num2) {
      const str = Math.floor(num / num1) + '秒';
      return str;
    } else if (num < num3) {
      const str = Math.floor(num / num2) + '分钟';
      return str;
    } else if (num < num4) {
      const str = Math.floor(num / num3) + '小时';
      return str;
    } else if (num < num5) {
      const str = Math.floor(num / num4) + '天';
      return str;
    } else {
      return null;
    }
  }

  // 最标准的时间输出方式
  referenceTime(value) {
    const _now = this.getCurrentTime();
    let rstr;
    const str = this.timeDifferance(value, _now);
    if (str) {
      rstr = str + '之前';
    } else {
      rstr = this.coboTimeStand(value);
    }
    return rstr;
  }

  customTimeFormate(str, type) {
    let rstr = '';
    const str1 = str;
    const timestr = this.GetDateDiff(str1);
    const date = new Date(timestr);
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const D = date.getDate();
    const h = date.getHours();
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());


    if (type === 'YMD') {
      rstr = Y + '年' + M + '月' + D + '日';
    } else if (type === 'MD') {
      rstr = M + '-' + D;
    } else if (type === 'HM') {
      rstr = h + ':' + m;
    }
    return rstr;
  }

  getYMD(str) {
    const rstr = this.customTimeFormate(str, 'YMD');
    return rstr;
  }

  getMD(str) {
    const rstr = this.customTimeFormate(str, 'MD');
    return rstr;
  }

  getHM(str) {
    const rstr = this.customTimeFormate(str, 'HM');
    return rstr;
  }

  isSameDay(time1, time2) {
    let flag;
    if (time2 && time1) {
      const str1 = this.customTimeFormate(time1, 'YMD');
      const str2 = this.customTimeFormate(time2, 'YMD');
      if (str1 === str2) {
        flag = true;
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
    return flag;
  }



  /**
   * 时间处理 -- 结束
   */


  // 升序排列
  ascSort(array = [], field) {
    return array.sort((a, b) => a[field] - b[field]);
  }


  // 设置判断哪个参数时active 状态
  getActiveBar(array: any[], key): number {
    let ind = 0;
    const num = array.length;
    for (let i = 0; i < num; i++) {
      const obj = array[i];
      if (obj[key]) {
        ind = i;
        break;
      }
    }
    return ind;
  }



  /**
   * 收藏，取消收藏
   * @param {any} obj 详见showDoc 收藏
   * @memberof CommonService
   */
  toggleCollected(obj) {
    const url = '/m/ajax/myFavoritesCourse.cobo';
    return this.myhttp.getData(url, obj);
  }


  /**
   *
   * 上传图片
   *
   */
  base64toBlob(b64Data, sliceSize?) {
    const block = b64Data.split(';');
    const contentType = block[0].split(':')[1] || '';
    const realData = block[1].split(',')[1];
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(realData);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray;
      byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });

    return blob;
  }


  blobToFile(blob, name, contentType) {
    const file = new File([blob], name, { type: contentType, lastModified: Date.now() });
    return file;
  }

  // 上传文件
  postFile(file) {
    const _url = '/util/upload.cobo?action=display';
    return this.myhttp.uploadFile(_url, file);
  }


  // 去除数组里的空字符串
  cleanArray(array: any[]) {
    const arr = [];
    array.map(function (val, index) {
      // 过滤规则为，不为空串、不为null、不为undefined，也可自行修改
      if (val !== '' && val !== undefined) {
        arr.push(val);
      }
    });
    return arr;
  }


}
