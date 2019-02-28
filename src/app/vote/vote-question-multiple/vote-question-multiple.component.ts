import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowdialogService } from '../../shared/services/showdialog.service';

@Component({
  selector: 'app-vote-question-multiple',
  templateUrl: './vote-question-multiple.component.html',
  styleUrls: ['./vote-question-multiple.component.scss']
})
export class VoteQuestionMultipleComponent implements OnInit {
  @Input() isActive; // 是不是可以投票
  @Input() showProgress;
  @Input() data;
  @Output() change: EventEmitter<any> = new EventEmitter();

  results = [];
  constructor(
    private dialog: ShowdialogService
  ) { }

  ngOnInit() {
    if (this.data) {
      this.setResult();
    }
  }

  // 将结果传递给父组件
  setResult() {
    this.results.length = 0;
    const array = this.data.choices;
    array.forEach(element => {
      if (element.checked) {
        this.results.push(element.eid);
      }
    });
    this.change.emit(this.results);
  }

  listernQuestionItem(event) {
    const ind = event.index;
    if (this.isActive) {
      this.changeActiveChoice(ind);
    }
  }

  // 更改选中的选项
  changeActiveChoice(ind) {
    const choice = this.data.choices[ind];
    const tempFlag = !choice.checked;
    if (tempFlag) { // 点击后选中
      const max = this.data.maxQuesLimit;
      if (max > 0) { // 有答案数目限制
        const len = this.results.length;
        if (max > len) {
          this.changeChoices(ind);
        } else {
          this.ansIsFullDialog(max);
        }
      } else {
        this.changeChoices(ind);
      }
    } else { // 点击后取消选中状态
      this.changeChoices(ind);
    }
  }

  // 更改选项状态
  changeChoices(ind) {
    const choice = this.data.choices[ind];
    choice.checked = ! choice.checked;
    this.setResult();
  }


  // 弹框告诉用户，选项有限制
  ansIsFullDialog(max) {
    const str = '最多选择' + max + '项';
    const wrong = {
      status: -1,
      msgs: [{ msg: str }]
    };
    this.dialog.warningDialog(wrong);
  }


  // 上传选中的eid
  changeValue(eid) {
    const arr = [eid];
    this.change.emit(arr);
  }

}
