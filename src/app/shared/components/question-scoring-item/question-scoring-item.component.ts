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
  flags = [];
  _selectValue;
  constructor() { }

  ngOnInit() {
    const length = this.choices.length;
    if (length > 0) {
      this.initFlags();
      this.choices = this.choices.sort(
        (a, b) => a.score - b.score
      );
    }
  }

  initFlags() {
    this.flags.length = 0;
    const length = this.choices.length;
    for (let i = 0; i < length; i++) {
      this.flags.push({ flag: false });
    }
  }

  changeFlags(ind) {
    const length = this.choices.length;
    for (let i = 0; i < length; i++) {
      if (i > ind) {
        this.flags[i].flag = false;
      } else {
        this.flags[i].flag = true;
      }
    }
  }

  changeValue(ind) {
    this.changeFlags(ind);
    const choice = this.choices[ind];
    this._selectValue = choice.des;
    const value = choice.label;
    const obj = {
      index: this.index,
      value: value
    };
    this.changed.emit(obj);
  }

}
