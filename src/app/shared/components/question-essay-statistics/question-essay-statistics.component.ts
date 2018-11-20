import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-essay-statistics',
  templateUrl: './question-essay-statistics.component.html',
  styleUrls: ['./question-essay-statistics.component.scss']
})
export class QuestionEssayStatisticsComponent implements OnInit {
  @Input() question; // 考题类型
  @Input() trailType; // 数据来源 考试，评估，360度评估
  @Input() index; // 当前考题序号
  @Input() showScore; // 是否显示分值
  @Input() showAnswer; // 是否显示正确答案
  @Input() showRightOrWrong; // 考试答案是否显示回答正确还是错误
  @Input() showGroup; // 评估，360度评估显示分组
  constructor() { }

  ngOnInit() {

  }

}
