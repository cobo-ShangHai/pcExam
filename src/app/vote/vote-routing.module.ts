import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingComponent } from './voting/voting.component';
import { ShowdialogService } from '../shared/services/showdialog.service';

const routes: Routes = [
  {
    path: 'voting',
    component: VotingComponent
  }, {
    path: '',
    redirectTo: 'voting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ShowdialogService
  ]
})
export class VoteRoutingModule { }
