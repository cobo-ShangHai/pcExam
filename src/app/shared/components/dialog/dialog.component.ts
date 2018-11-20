import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
     if (this.data && this.data.timeLimit) {
      const num = this.data.timeLimit * 1000;
      setTimeout(() => this.close(), num);
    }
  }

  close() {
    this.dialogRef.close();
}


}
