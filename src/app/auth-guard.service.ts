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

    // 开发环境
    // const _token = 'kMy4HqApfME'; // 测试用的token test01
    // return this.cs.isTokenEffective(_token);


    // 正式环境
     return true;

  }



}
