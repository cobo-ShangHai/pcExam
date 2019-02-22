import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';

import { TakeExerciseComponent } from './take-exercise/take-exercise.component';
import { ExerciseService } from './exercise.service';
import { SharedModule } from '../shared/shared.module';
import { ShowdialogService } from '../shared/services/showdialog.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ExerciseRoutingModule
  ],
  declarations: [
    TakeExerciseComponent
  ],
  providers: [
    ExerciseService,
    ShowdialogService
  ]
})
export class ExerciseModule { }
