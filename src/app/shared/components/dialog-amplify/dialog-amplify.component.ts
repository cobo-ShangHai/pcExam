import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-amplify',
  templateUrl: './dialog-amplify.component.html',
  styleUrls: ['./dialog-amplify.component.scss']
})
export class DialogAmplifyComponent implements OnInit {

  // obj = {
  //   type:'',
  //   content:''
  // }

  constructor(
    public dialogRef: MatDialogRef<DialogAmplifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

  }

}
