import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamService } from './exam.service';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { ShowdialogService } from '../shared/services/showdialog.service';
import { CountDownComponent } from './count-down/count-down.component';
import { ExamDetailsListComponent } from './exam-details-list/exam-details-list.component';
import { ExamDetailsAbstractComponent } from './exam-details-abstract/exam-details-abstract.component';
import { StorageService } from '../shared/services/storage.service';
import { ExamHistoryComponent } from './exam-history/exam-history.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ExamRoutingModule
  ],
  declarations: [
    ExamDetailsComponent,
    TakeExamComponent,
    CountDownComponent,
    ExamDetailsListComponent,
    ExamDetailsAbstractComponent,
    ExamHistoryComponent,
  ],
  providers: [
    ExamService,
    ShowdialogService,
    StorageService
  ]
})
export class ExamModule { }
