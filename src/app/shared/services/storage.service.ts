import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  /*
       *local:
       * token :登陆所用
       *
       * session:
       * */
  setLocal(k, v): void {
    window.localStorage.setItem(k, v);
  }

  getLocal(k, defaultValue?): any {
    return window.localStorage.getItem(k) || defaultValue;
  }

  removeLocal(k): void {
    window.localStorage.removeItem(k);
  }

  clearAllLocal() {
    window.localStorage.clear();
  }

  /**
   *
   *
   * @param {any} k;
   * @param {any} v;
   * @memberof StorageService
   * loginedUrl , 登录后跳转的loginUrl 地址
   *
   */
  setSession(k, v): void {
    window.sessionStorage.setItem(k, v);
  }

  getSession(k, defaultValue?): any {
    return window.sessionStorage.getItem(k) || defaultValue;
  }

  removeSession(k): void {
    window.sessionStorage.removeItem(k);
  }

  setSessionMap(k, map) {
    const str = JSON.stringify(Array.from(map.entries()));
    this.setSession(k, str);
  }

  getSessionMap(k) {
    let map = new Map();
    const mapStr = this.getSession(k);
    if (mapStr) {
      const map1 = new Map(JSON.parse(mapStr));
      if (map1.size) {
        map = map1;
      }
    }
    return map;
  }

}
