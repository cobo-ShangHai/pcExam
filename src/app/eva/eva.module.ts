import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaRoutingModule } from './eva-routing.module';
import { EvaDetailsComponent } from './eva-details/eva-details.component';
import { TakeEvaComponent } from './take-eva/take-eva.component';
import { EvaService } from './eva.service';
import { SharedModule } from '../shared/shared.module';
import { ShowdialogService } from '../shared/services/showdialog.service';
import { EvaDetailsWarningComponent } from './eva-details-warning/eva-details-warning.component';
import { EvaDetailsBriefComponent } from './eva-details-brief/eva-details-brief.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { StatisticsDetailsComponent } from './statistics-details/statistics-details.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    EvaRoutingModule
  ],
  declarations: [
    EvaDetailsComponent,
    TakeEvaComponent,
    EvaDetailsWarningComponent,
    EvaDetailsBriefComponent,
    StatisticsListComponent,
    StatisticsDetailsComponent
  ],
  providers: [
    EvaService,
    ShowdialogService
  ]
})
export class EvaModule { }
