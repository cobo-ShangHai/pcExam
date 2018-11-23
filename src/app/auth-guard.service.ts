/*
 * @Author: 刘建省
 * @Date: 2018-11-23 09:39:27
 * @Last Modified by: 刘建省
 * @Last Modified time: 2018-11-23 09:40:06
 *
 * 注意： isonline 打包前需要处理
 */


import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StorageService } from './shared/services/storage.service';
import { CommonService } from './shared/services/common.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private http: HttpClient,
    private cs: CommonService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | boolean {
    console.log('AuthGuard#canActivate called!', route.url[0].path);

    const url = this.storageService.getLocal('loginedUrl');
    const _isOnLine = this.storageService.getLocal('isOnLine') ; // 测试用的'true' , 打包前要取消
    if (_isOnLine && _isOnLine !== '') {
      return _isOnLine === 'true' || _isOnLine === true;
    } else {
      this.cs.getBack();
      return false;
    }
  }

  // 储存 url
  storageUrl(url) {
    if (url) {
      const flag1 = url.includes('/homepage/');
      const flag2 = url.includes('/prepare/');
      // alert('flag1 | flag2:' + flag1 + ' | ' + flag2);
      if (!flag1 && !flag2) {
        this.storageService.setLocal('loginedUrl', url);
      }
    }
  }


}
