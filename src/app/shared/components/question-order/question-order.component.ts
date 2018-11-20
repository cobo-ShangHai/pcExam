import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-question-order',
  templateUrl: './question-order.component.html',
  styleUrls: ['./question-order.component.scss']
})
export class QuestionOrderComponent implements OnInit, AfterViewInit {
  _fibvalue;
  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();

  eventOptions: SortablejsOptions = {
    onUpdate: () => {
      this.changeAnswer();
    }
  };

  constructor() { }

  ngOnInit() {

    if (this.trailType === 'exam') {
      this.ChangeExamChoiceOrder();
    }
  }

  // d复原已有的答案顺序
  ChangeExamChoiceOrder() {
    const obj = this.question.initValue;
    const choices = this.question.choices;
    const array = [];
    if (obj) {
      obj.forEach(value => {
        array.push(choices[value]);
      });
      this.question.choices = array;
    }
  }

  ngAfterViewInit() {
    this.changeAnswer(); // 给一个默认值
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
    const choices = this.question.choices;
    for (let i = 0; i < choices.length; i++) {
      array.push(choices[i].inx);
    }
    return array;
  }

  // 其它页面返回数据格式
  setOhterTypeAnswer() {
    let value = '';
    const choices = this.question.choices;
    for (let i = 0; i < choices.length; i++) {
      value += choices[i].label;
    }
    return value;
  }

}
