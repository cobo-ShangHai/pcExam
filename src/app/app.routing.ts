import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: 'exam',
    canActivate: [AuthGuardService],
    loadChildren: './exam/exam.module#ExamModule'
  }, {
    path: 'exercise',
    canActivate: [AuthGuardService],
    loadChildren: './exercise/exercise.module#ExerciseModule'
  }, {
    path: 'eva',
    canActivate: [AuthGuardService],
    loadChildren: './eva/eva.module#EvaModule'
  }, {
    path: '',
    redirectTo: '/exam',
    pathMatch: 'full'
  }];
