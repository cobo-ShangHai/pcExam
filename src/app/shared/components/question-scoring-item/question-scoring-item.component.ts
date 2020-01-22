import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-scoring-item',
  templateUrl: './question-scoring-item.component.html',
  styleUrls: ['./question-scoring-item.component.scss']
})
export class QuestionScoringItemComponent implements OnInit {
  @Input() index;
  @Input() choices;
  @Input() des;
  @Input() showScore;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  labelArray = [];
  maxScore = 0;
  _selectRate = 0;
  _selectValue;
  rate = 4.44;
  constructor() { }

  ngOnInit() {
    const length = this.choices.length;
    if (length > 0) {
      this.choices = this.choices.sort(
        (a, b) => a.score - b.score
      );
      this.labelArray.length = 0;
      this.choices.forEach((item) => {
        this.labelArray.push(item.des);
      });
      this.maxScore = this.labelArray.length;
    }
  }


  changeValue(ind) {
    const num = +ind - 1;
    const choice = this.choices[num];
    this._selectValue = choice.des;
    const value = choice.label;
    const obj = {
      index: this.index,
      value: value
    };
    this.changed.emit(obj);
  }

}
