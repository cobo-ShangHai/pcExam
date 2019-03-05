import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatRadioModule,
  MatCheckboxModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
} from '@angular/material';

import { VoteRoutingModule } from './vote-routing.module';
import { VotingComponent } from './voting/voting.component';
import { SharedModule } from '../shared/shared.module';
import { VoteService } from './vote.service';
import { ShowdialogService } from '../shared/services/showdialog.service';
import { VoteQuestionItemComponent } from './vote-question-item/vote-question-item.component';
import { VoteQuestionMultipleComponent } from './vote-question-multiple/vote-question-multiple.component';
import { VoteQuestionSingleComponent } from './vote-question-single/vote-question-single.component';


@NgModule({
  imports: [
    FormsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    CommonModule,
    VoteRoutingModule
  ],
  declarations: [
    VotingComponent,
    VoteQuestionItemComponent,
    VoteQuestionMultipleComponent,
    VoteQuestionSingleComponent,
  ],
  providers: [
    VoteService,
    ShowdialogService
  ]
})
export class VoteModule { }
