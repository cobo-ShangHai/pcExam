import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeCycleevaComponent } from './take-cycleeva/take-cycleeva.component';
import { CycleevaDetailsComponent } from './cycleeva-details/cycleeva-details.component';


const routes: Routes = [{
  path: 'details',
  component: CycleevaDetailsComponent
}, {
  path: 'take/:eid',
  component: TakeCycleevaComponent
}, {
  path: '',
  redirectTo: 'details',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CycleevaRoutingModule { }
