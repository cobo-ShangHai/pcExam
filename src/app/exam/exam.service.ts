/*
 * @Author: 刘建省
 * @Date: 2018-10-17 17:37:08
 * @Last Modified by: 刘建省
 * @Last Modified time: 2018-11-19 19:54:52
 * 测试环境 http://api.cobocn.net:8080
 * 正式环境 https://api.cobo.cn
 */
import { Injectable } from '@angular/core';
import { MyhttpService } from '../shared/services/myhttp.service';

@Injectable()
export class ExamService {

  constructor(private myhttp: MyhttpService) { }

  // 获取独立考试的基本信息
  examBriefInfo(eid) {
    const url = '/portal/cpaper/CPaper/BO.cobo';
    const obj = {
      action: 'notice2',
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

  // 考试试卷信息
  examPaperInfo(api_server, token) {
    const url = api_server + '/exam/paper';
    const tokenstr = 'Bearer ' + token;
    const obj = { 'Authorization': tokenstr };
    return this.myhttp.getData(url, {}, obj);
  }

  // 告诉后台开始考试
  startTakeExam(api_server, token) {
    const url = api_server + '/exam/start';
    const tokenstr = 'Bearer ' + token;
    const obj = { 'Authorization': tokenstr };
    return this.myhttp.getData(url, {}, obj);
  }

  // 上传答案
  /**
   * @param {any} obj const obj = {server:'',token:'',answers:''};
   * @returns
   * @memberof ExamService
   */
  postAnswer(obj) {
    const url = obj.server + '/exam/answer';
    const tokenstr = 'Bearer ' + obj.token;
    const headerObj = { 'Authorization': tokenstr };
    const dataObj = { answers: obj.answers };
    return this.myhttp.postData(url, dataObj, headerObj);
  }

  submitExam(api_server, token) {
    const url = api_server + '/exam/submit';
    const tokenstr = 'Bearer ' + token;
    const headerObj = { 'Authorization': tokenstr };
    return this.myhttp.postData(url, {}, headerObj);
  }

  getExamHistory(eid) {
    const url = '/m/cpaper/CPaper/BO.cobo';
    const obj = {
      action: 'detail',
      eid: eid
    };
    return this.myhttp.getData(url, obj);
  }

}
