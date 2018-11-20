import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-scoring-statistics',
  templateUrl: './question-scoring-statistics.component.html',
  styleUrls: ['./question-scoring-statistics.component.scss']
})
export class QuestionScoringStatisticsComponent implements OnInit {
  @Input() question;
  @Input() trailType;
  @Input() type;
  @Input() index;
  @Input() showScore;
  @Input() showGroup; // 评估，360度评估显示分组
  constructor() { }

  ngOnInit() {
  }

}
