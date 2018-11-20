import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: 'exam',
    canActivate: [AuthGuardService],
    loadChildren: './exam/exam.module#ExamModule'
  }, {
    path: '',
    redirectTo: '/exam',
    pathMatch: 'full'
  }];
