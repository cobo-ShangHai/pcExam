import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-question-scoring-item-statistics',
  templateUrl: './question-scoring-item-statistics.component.html',
  styleUrls: ['./question-scoring-item-statistics.component.scss']
})
export class QuestionScoringItemStatisticsComponent implements OnInit {
  @Input() index;
  @Input() choices;
  @Input() des;
  @Input() showScore;
  flags = [];
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

}
