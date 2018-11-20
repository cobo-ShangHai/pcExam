import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyhttpService {
  public newParams = {
    version: 'v4.0'
  }; // 4.0 版本开始所有的http 请求都要加 version : v4.0

  constructor(protected http: HttpClient) { }

  // 拼凑url
  togetherUrl(data: any): string {
    let str = '';
    if (data) {
      let ind = 0;
      for (const key in data) {
        if (key) {
          ind++;
          str += (ind === 1) ? '?' : '&';
          str += key + '=' + data[key];
        }
      }
    }
    return str;
  }


  setHeaderParams(headers, data) {
    if (data) {
      for (const key in data) {
        if (data[key] === false || data[key]) {
          headers = headers.set(key, data[key]);
        }
      }
    }
    return headers;
  }


  getData(url: string, params = {}, headerParam = {}): Observable<any> {
    const data = Object.assign(params, this.newParams);
    const _url = url + this.togetherUrl(data);

    let myheader = new HttpHeaders().set('Content-Type', 'application/json');
    myheader = this.setHeaderParams(myheader, headerParam);

    return this.http.get(_url, { headers: myheader });
  }


  /**
   *
   *
   * @param {string} url
   * @param {*} params 必须是json {key,value}
   * @returns {Observable<any>}
   * @memberof MyhttpService
   */
  postData(url: string, params: any = {}, headerParam = {}): Observable<any> {
    const data = Object.assign(params, this.newParams);
    const body = Object.getOwnPropertyNames(data)
      .reduce((p, key) => p.set(key, params[key]), new HttpParams());

    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    myheader = this.setHeaderParams(myheader, headerParam);


    return this.http.post(url, body, { headers: myheader });
  }


  // file from event.target.files[0]
  uploadFile(url: string, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('realFormFile(FN_IMAGE_1)', file);

    const params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }
}
