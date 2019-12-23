import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../vote.service';
import { ShowdialogService } from '../../shared/services/showdialog.service';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  _warningText;
  _eid;
  _voteDetails;
  _candoVote = false;
  _showProgress = false; // 查看投票结果
  _sotredUp: any; // 收藏数据

  // 投票结果
  _voteResult = {
    answers: '',
    other: '',
    canSubmit: false
  };

  _preview = false; // 是不是预览页面

  constructor(
    private cs: CommonService,
    private dialog: ShowdialogService,
    private vs: VoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.prepareLoadingInfo();
  }

  // 从路由中获取信息后的操作
  async prepareLoadingInfo() {
    const fun1 = this.getRouterInfo();
    try {
      const results = await Promise.all([fun1]);
      const obj0: any = results[0];
      if (obj0) {
        this._eid = obj0.eid;
      }
      if (obj0.preview) {
        this._preview = true;
      } else {
        this._preview = false;
      }
    } catch (error) {
      console.log('error:', error);
    }
    this.getInfo();
  }

  // 获取路由信息
  getRouterInfo() {
    return new Promise((resolve, reject) => {
      this.route.paramMap.subscribe((info: any) => {
        if (info && info.params) {
          resolve(info.params);
        } else {
          reject('没有获取到参数');
        }
      });
    });
  }

  // 获取投票信息
  getInfo() {
    this.vs.voteDetails(this._eid).subscribe(data => {
      this.afterGetInfo(data);
    }
    );
  }

  afterGetInfo(data) {
    if (data.status > -1) {
      let str;
      if (data.data.quesType === 0) {
        str = ' <span class="ques-type">(单选题)</span>';
      } else if (data.data.quesType === 1) {
        str = ' <span class="ques-type">(多选题)</span>';
      }
      data.data.des1 = data.data.des1 + str;
    } else if (data.status === -1) {
      const obj = {
        status: -1,
        msgs: data.msgs
      };
      this.dialog.warningDialog(obj);
    } else if (data.status === -20) { // 没有权限

    }
    this._voteDetails = data;
    this.isCanDoVote();
    this.isCanSeeResult();
    this.setWaringText();
    this.setStoredUpData();
  }

  // 设置收藏课程的数据
  setStoredUpData() {
    this._sotredUp = {};
    this._sotredUp.flag = this._voteDetails.favorited;
    this._sotredUp.eid = this._eid;
    this._sotredUp.linktype = 'vote';
  }


  setWaringText() {
    const data = this._voteDetails.data;
    const type = data.viewType;
    if (type === 2) {
      this._warningText = '只有管理员可以查看投票结果';
    } else if (data.voted) {
      this._warningText = '您已完成投票';
    } else if (data.alreadyEnd) {
      this._warningText = '投票已结束';
    }
  }

  // 判断是不是可以投票
  isCanDoVote() {
    const data = this._voteDetails.data;
    if (data.voted || data.alreadyEnd) {
      this._candoVote = false;
    } else {
      this._candoVote = true;
    }
  }

  // 判断是不是可以查看投票结果
  isCanSeeResult() {
    const data = this._voteDetails.data;
    const type = data.viewType;
    const flag1 = (type === 0); // 投票前可见
    const flag2 = ((data.voted) && (type === 1)); // 投票后可见
    const flag3 = (type === 2) && data.isLeader; // 是不是管理员
    if (flag1 || flag2 || flag3) {
      this._showProgress = true;
    } else {
      this._showProgress = false;
    }
  }

  listernSelectChange(event) {
    if (event && event.length > 0) {
      const minQuesLimit = this._voteDetails.data.minQuesLimit; // 最小必选
      const answersLength = event.length;
      if (answersLength > minQuesLimit || answersLength === minQuesLimit) {
        this._voteResult.canSubmit = true;
        this._voteResult.answers = '';
        event.forEach(element => {
          const str = element + ':';
          this._voteResult.answers += str;
        });
      } else {
        this._voteResult.canSubmit = false;
      }
    }
  }

  // 提交
  doSubmit() {
    this.vs.submitVote(this._eid, this._voteResult).subscribe(
      data => {
        if (data.status === 0) {
          this.subSuccess();
        } else {
          this.subFaild(data);
        }
      }
    );
  }

  // 提交成功
  subSuccess() {
    const obj = {
      status: 999,
      msgs: [{ msg: '提交成功' }]
    };
    this.dialog.warningDialog(obj);
    setTimeout(() => {
      this.getInfo();
    }, 4000);
  }

  // 提交失败
  subFaild(data) {
    const msgstr = data.msg || '提交失败';
    const obj = {
      status: data.status,
      msgs: [{ msg: msgstr }]
    };
    this.dialog.warningDialog(obj);
  }

  // 放大图片
  amplifyerImage(url) {
    const obj = {
      'title': '',
      'type': 'image',
      'content': url
    };
    this.dialog.AmplifyInfo(obj);
  }

}
