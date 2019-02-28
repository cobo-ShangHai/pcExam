import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaDetailsComponent } from './eva-details/eva-details.component';
import { TakeEvaComponent } from './take-eva/take-eva.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { StatisticsDetailsComponent } from './statistics-details/statistics-details.component';

const routes: Routes = [{
  path: 'details',
  component: EvaDetailsComponent
}, {
  path: 'take/:eid',
  component: TakeEvaComponent
}, {
  path: 'statisticsList',
  component: StatisticsListComponent
}, {
  path: 'statisticsDetails',
  component: StatisticsDetailsComponent
}, {
  path: '',
  redirectTo: 'details',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaRoutingModule { }
