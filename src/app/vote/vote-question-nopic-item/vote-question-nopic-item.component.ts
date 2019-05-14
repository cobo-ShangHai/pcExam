import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';


@Component({
  selector: 'app-vote-question-nopic-item',
  templateUrl: './vote-question-nopic-item.component.html',
  styleUrls: ['./vote-question-nopic-item.component.css']
})
export class VoteQuestionNopicItemComponent implements OnInit {
  progressActive;
  @Input() demo;
  @Input() choice;
  @Input() data;
  @Input() index;
  @Input() showProgress;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
    this.progressActive = this.choice.rate + '%';
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
  changeVote() {
    const obj = {
      index: this.index
    };
    this.change.emit(obj);
  }

}
