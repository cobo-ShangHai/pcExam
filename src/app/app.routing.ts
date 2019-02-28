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
    path: '',
    redirectTo: '/exam',
    pathMatch: 'full'
  },{
    path:'vote',
    canActivate:[AuthGuardService],
    loadChildren:'./vote/vote.module#VoteModule'
  }
];
