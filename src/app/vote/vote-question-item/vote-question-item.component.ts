import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';


@Component({
  selector: 'app-vote-question-item',
  templateUrl: './vote-question-item.component.html',
  styleUrls: ['./vote-question-item.component.scss']
})
export class VoteQuestionItemComponent implements OnInit {
  progressActive;
  @Input() choice;
  @Input() data;
  @Input() index;
  @Input() showProgress;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
    this.progressActive = this.choice.rate + "%";
  }

  // 放大图片
  amplifyerImage() {
    const obj = {
      'title': this.choice.des,
      'type': 'image',
      'content': this.choice.imgUrl
    };
    this.dialog.AmplifyInfo(obj);
  }
  // 显示所有的描述文字

  amplifyerText() {
    const obj = {
      'title': '',
      'type': 'text',
      'content': this.choice.des
    };
    this.dialog.AmplifyInfo(obj);
  }


  changeVote() {
    const obj = {
      index: this.index
    };
    this.change.emit(obj);
  }

}
