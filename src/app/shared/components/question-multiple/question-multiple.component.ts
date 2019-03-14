import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../services/showdialog.service';

@Component({
  selector: 'app-question-multiple',
  templateUrl: './question-multiple.component.html',
  styleUrls: ['./question-multiple.component.scss'],
  providers: [ShowdialogService]
})
export class QuestionMultipleComponent implements OnInit {
  _quesAnswer = ''; // 问题的 答案
  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();
  _fibvalue = '';
  _tempValue ;
  flags = [];
  constructor(
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
    if (this.question) {
      if (this.trailType === 'exam') {
        this.initExamFlags();
      } else {
        this.initOtherTypeFlags();
      }
    }
  }

  // 初始化设置, 考试flags 数组
  initExamFlags() {
    this.flags.length = 0;
    const num = this.question.choices.length;
    const _init_values = this.question.initValue || [];
    for (let i = 0; i < num; i++) {
      const label = this.question.choices[i].inx;
      if (_init_values.includes(label)) {
        this.flags.push({ flag: true });
      } else {
        this.flags.push({ flag: false });
      }
    }
  }

  // 初始化设置, 其它类型flags 数组
  initOtherTypeFlags() {
    this.flags.length = 0;
    const num = this.question.choices.length;
    for (let i = 0; i < num; i++) {
      this.flags.push({ flag: false });
    }
  }

  // 更改flags
  changeFlags(ind) {
    const temp = !this.flags[ind].flag;
    const maxnum = this.question.maxAnswerCount; // 最多有几个选项
    if (maxnum && temp) {
      const num1 = this._quesAnswer.length;
      if (maxnum > num1) {
        this.flags[ind].flag = temp;
      } else if (temp) {
        const str = '最多可选' + maxnum + '个选项';
        const obj = {
          status: -1,
          msgs: [{ msg: str }]
        };
        this.dialog.warningDialog(obj);
      }
    } else {
      this.flags[ind].flag = temp;
    }
  }

  // 选择答案
  changeAnswer(ind) {
    if (this.trailType === 'exam') {
      this._tempValue = this.setExamAnswer(ind);
    } else {
      this._tempValue = this.setOhterTypeAnswer(ind);
    }
    this.pushAnswer();
  }

  // 更新其它答案
  changeOtherAnswer() {
   this.pushAnswer();
  }

  // 推送答案
  pushAnswer() {
    const obj = {
      index: this.index,
      value: this._tempValue,
      enableOther: this.question.enableOther,
      otherAnswer: this._fibvalue
    };
    this.change.emit(obj);
  }

  // 考试页面返回数据格式
  setExamAnswer(ind) {
    const temp = [];
    let array = [];
    this.changeFlags(ind);
    const length = this.question.choices.length;
    for (let i = 0; i < length; i++) {
      const inx = this.question.choices[i].inx;
      const flag = this.flags[i].flag;
      if (flag) {
        temp.push(inx);
      }
    }
    array = temp.sort((a, b) => a - b);
    return array;
  }

  // 其它页面返回数据格式
  setOhterTypeAnswer(ind) {
    let value = '';
    this.changeFlags(ind);
    const length = this.question.choices.length;
    for (let i = 0; i < length; i++) {
      const label = this.question.choices[i].label;
      const flag = this.flags[i].flag;
      if (flag) {
        value += label;
      }
    }
    this._quesAnswer = value;
    return value;
  }


}
