import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-essay',
  templateUrl: './question-essay.component.html',
  styleUrls: ['./question-essay.component.scss']
})
export class QuestionEssayComponent implements OnInit {
  _fibvalue = '';
  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    const obj = this.question.initValue;
    this._fibvalue = obj ? obj : '';
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
    const array = [this._fibvalue];
    return array;
  }

  // 其它页面返回数据格式
  setOhterTypeAnswer() {
    const value = this._fibvalue || '';
    return value;
  }

}
