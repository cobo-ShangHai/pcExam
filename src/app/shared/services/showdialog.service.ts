import { Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ConfirmDialogComponent } from '../components/dialog-confirm/confirm-dialog.component';
import { Observable } from 'rxjs/Observable';
import { TextareaDialogComponent } from '../components/dialog-textarea/textarea-dialog.component';
import { DialogAmplifyComponent } from '../components/dialog-amplify/dialog-amplify.component';

@Injectable()
export class ShowdialogService {

  constructor(
    private dialog: MatDialog,
  ) { }

  /**
   *
   *
   * @param {any} data  msgs=[{msg:'error'}] status: normal:999 , 2 -1,1 wrong
   * @memberof ShowdialogService
   */
  warningDialog(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = false;
    dialogConfig.panelClass = 'error-dialog-container';

    dialogConfig.data = {
      timeLimit: data.time || 3,
      status: data.status || -1,
      msgs: data.msgs
    };
    setTimeout(() => this.dialog.open(DialogComponent, dialogConfig));
  }

  // 确认
  confrimDialog(data): Observable<boolean> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: data.title || '',
      text: data.text || ''
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

  // 输入框
  textAreaDialog(data): Observable<boolean> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: data.title || '',
      text: data.text || ''
    };
    const dialogRef = this.dialog.open(TextareaDialogComponent, dialogConfig);
    return dialogRef.afterClosed();
  }



  // 放大图片 或者文字
  AmplifyInfo(data): Observable<boolean> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: data.title || '',
      content: data.content || '', // 放大的内容
      type: data.type || ''   // 放大的是什么类型的数据: text , image
    };
    const dialogRef = this.dialog.open(DialogAmplifyComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

}
