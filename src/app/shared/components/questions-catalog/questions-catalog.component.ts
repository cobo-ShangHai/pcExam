import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-questions-catalog',
  templateUrl: './questions-catalog.component.html',
  styleUrls: ['./questions-catalog.component.scss']
})
export class QuestionsCatalogComponent implements OnInit {

  _array;
  constructor(public dialogRef: MatDialogRef<QuestionsCatalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data && this.data.map) {
      this._array = Array.from(this.data.map.values());
    }
  }

  goTo(ind) {
    this.dialogRef.close(ind);
  }

}
