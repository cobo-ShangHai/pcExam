import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ExamHistoryComponent } from './exam-history/exam-history.component';

const routes: Routes = [{
  path: 'details',
  component: ExamDetailsComponent
}, {
  path: 'take',
  component: TakeExamComponent
}, {
  path: 'history',
  component: ExamHistoryComponent
}, {
  path: '',
  redirectTo: 'details',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
