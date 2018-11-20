import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeExerciseComponent } from './take-exercise/take-exercise.component';
const routes: Routes = [
  {
    path: 'take',
    component: TakeExerciseComponent
  }, {
    path: '',
    redirectTo: 'take',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
