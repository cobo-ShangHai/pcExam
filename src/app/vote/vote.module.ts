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
   ],
  providers: [
    VoteService,
    ShowdialogService
  ]
})
export class VoteModule { }
