import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-single-choice',
  templateUrl: './question-single-choice.component.html',
  styleUrls: ['./question-single-choice.component.scss']
})
export class QuestionSingleChoiceComponent implements OnInit {

  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();

  flags = [];
  constructor() { }

  ngOnInit() {
    if (this.question) {
      if (this.trailType === 'exam') {
        this.initExamFlags();
      } else {
        this.initOtherTypeFlags();
      }
    }
  }

  // 初始化设置 , 考试flags 数组
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

  // 初始化设置 , 其它类型flags 数组
  initOtherTypeFlags() {
    this.flags.length = 0;
    const num = this.question.choices.length;
    for (let i = 0; i < num; i++) {
      this.flags.push({ flag: false });
    }
  }

  // 更改flags
  changeFlags(ind) {
    const length = this.flags.length;
    for (let i = 0; i < length; i++) {
      this.flags[i].flag = false;
    }
    this.flags[ind].flag = true;
  }

  // 选择答案
  changeAnswer(ind) {
    let tempValue;
    if (this.trailType === 'exam') {
      tempValue = this.setExamAnswer(ind);
    } else {
      tempValue = this.setOhterTypeAnswer(ind);
    }
    const obj = {
      index: this.index,
      value: tempValue
    };
    this.change.emit(obj);
  }

  // 考试页面返回数据格式
  setExamAnswer(ind) {
    this.changeFlags(ind);
    const array = [this.question.choices[ind].inx];
    return array;
  }

  // 其它页面返回数据格式
  setOhterTypeAnswer(ind) {
    this.changeFlags(ind);
    const value = this.question.choices[ind].label;
    return value;
  }

}
