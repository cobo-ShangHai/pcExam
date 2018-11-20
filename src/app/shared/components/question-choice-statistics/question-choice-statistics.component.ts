import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-question-choice-statistics',
  templateUrl: './question-choice-statistics.component.html',
  styleUrls: ['./question-choice-statistics.component.scss']
})
export class QuestionChoiceStatisticsComponent implements OnInit {
  @Input() question; // 考题类型
  @Input() trailType; // 数据来源 考试，评估，360度评估
  @Input() index; // 当前考题序号
  @Input() showScore; // 是否显示分值
  @Input() showAnswer; // 是否显示正确答案
  @Input() showRightOrWrong; // 考试答案是否显示回答正确还是错误
  @Input() showGroup; // 评估，360度评估显示分组
  constructor(
    private cs: CommonService
  ) { }

  ngOnInit() {
    const array = this.question.choices;
    if (array && array.length) {
      const obj1 = array[0];
      const flag1 = obj1.hasOwnProperty('inx'); // 考试界面
      if (flag1) {
        const temp1 = this.cs.ascSort(array, 'inx');
        this.question.choices = temp1;
      }
    }
  }



}
