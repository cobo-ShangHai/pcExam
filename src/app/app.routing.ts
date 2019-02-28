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
    path: 'cycleeva',
    canActivate: [AuthGuardService],
    loadChildren: './cycleeva/cycleeva.module#CycleevaModule'
  }, {
    path: '',
    redirectTo: '/exam',
    pathMatch: 'full'
  },{
    path:'vote',
    canActivate:[AuthGuardService],
    loadChildren:'./vote/vote.module#VoteModule'
  }
];
