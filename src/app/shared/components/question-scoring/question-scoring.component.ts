import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-scoring',
  templateUrl: './question-scoring.component.html',
  styleUrls: ['./question-scoring.component.scss']
})
export class QuestionScoringComponent implements OnInit {
  _scoresMap = new Map();
  @Input() question: any;
  @Input() index;
  @Input() trailType;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.initScoresMap();
  }

  initScoresMap() {
    const length = this.question.items.length;
    for (let i = 0; i < length; i++) {
      this._scoresMap.set(i, { value: '' });
    }
  }

  selectScore(event) {

    const length = this.question.items.length;
    const ind = event.index;
    const obj = this._scoresMap.get(ind) || {};
    obj.value = event.value;
    this._scoresMap.set(ind, obj);
    this.returnAnswers();
  }

  returnAnswers() {
    const sep = '||*|*||';
    let answers = '';
    this._scoresMap.forEach((val, key) => {
      answers += val.value + sep;
    });
    const obj = {
      index: this.index,
      value: answers
    };

    this.change.emit(obj);
  }

}
