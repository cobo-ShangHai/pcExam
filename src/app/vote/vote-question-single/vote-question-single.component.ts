import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-question-single',
  templateUrl: './vote-question-single.component.html',
  styleUrls: ['./vote-question-single.component.scss']
})
export class VoteQuestionSingleComponent implements OnInit {

  @Input() isActive; // 是不是可以投票
  @Input() showProgress;
  @Input() data;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(

  ) { }

  ngOnInit() {

  }



  listernQuestionItem(event) {
    const ind = event.index;
    if (this.isActive) {
      this.changeActiveChoice(ind);
    }
  }

  // 更改选中的选项
  changeActiveChoice(ind) {
    this.data.choices.forEach((element, index) => {
      if (ind === index) {
        element.checked = true;
        this.changeValue(element.eid);
      } else {
        element.checked = false;
      }
    });
  }

  // 上传选中的eid
  changeValue(eid) {
    const arr = [eid];
    this.change.emit(arr);
  }


}
