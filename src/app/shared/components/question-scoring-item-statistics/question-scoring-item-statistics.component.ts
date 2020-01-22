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
  maxScore = 0;
  _selectRate = 0;
  constructor() { }

  ngOnInit() {
    const length = this.choices.length;
    if (length > 0) {
      this.choices = this.choices.sort(
        (a, b) => a.score - b.score
      );
      this.maxScore = this.choices.length;
    }
  }

}
