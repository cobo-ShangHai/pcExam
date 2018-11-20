import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-fill-gap',
  templateUrl: './question-fill-gap.component.html',
  styleUrls: ['./question-fill-gap.component.scss']
})
export class QuestionFillGapComponent implements OnInit {
  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.initAnswer();
  }

  // 初始化设置答案
  initAnswer() {
    if (this.question.initValue) {
      const subs = this.question.subs;
      let num = 0;
      for (let i = 0; i < subs.length; i++) {
        const sub = subs[i];
        if (sub.type === 'blank') {
          sub.answer = this.question.initValue[num];
          num++;
        }
      }
    }
  }


  setFIBAnswer(obj, id) {
    console.log(obj, id);
  }

  // 更改答案
  changeAnswer() {
    let tempValue;
    if (this.trailType === 'exam') {
      tempValue = this.setExamAnswer();
    } else {
      tempValue = this.setOhterTypeAnswer();
    }
    const obj = {
      index: this.index,
      value: tempValue
    };
    this.change.emit(obj);
  }


  // 考试页面返回数据格式
  setExamAnswer() {
    const array = [];
    const subs = this.question.subs;
    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i];
      if (sub.type === 'blank') {
        const ans = sub.answer || '';
        array.push(ans);
      }
    }
    return array;
  }

  // 其它页面返回数据格式
  setOhterTypeAnswer() {
    let _fibvalue = '';
    const sep = '||*|*||';
    const subs = this.question.subs;
    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i];
      if (sub.type === 'blank') {
        const ans = sub.answer || '';
        _fibvalue = _fibvalue + ans;
        if (i > 0) {
          _fibvalue += sep;
        }
      }
    }
    return _fibvalue;
  }

}
