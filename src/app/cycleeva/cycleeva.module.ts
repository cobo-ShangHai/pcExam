import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycleevaRoutingModule } from './cycleeva-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CycleevaDetailsComponent } from './cycleeva-details/cycleeva-details.component';
import { TakeCycleevaComponent } from './take-cycleeva/take-cycleeva.component';
import { CycleevaService } from './cycleeva.service';
import { ShowdialogService } from '../shared/services/showdialog.service';
import { CycleevaDetailsWarningComponent } from './cycleeva-details-warning/cycleeva-details-warning.component';
import { CycleevaDetailsBriefComponent } from './cycleeva-details-brief/cycleeva-details-brief.component';
import { CycleevaDetailsSheetComponent } from './cycleeva-details-sheet/cycleeva-details-sheet.component';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CycleevaRoutingModule
  ],
  declarations: [
    CycleevaDetailsComponent,
    TakeCycleevaComponent,
    CycleevaDetailsWarningComponent,
    CycleevaDetailsBriefComponent,
    CycleevaDetailsSheetComponent
  ],
  providers: [
    CycleevaService,
    ShowdialogService
  ]
})
export class CycleevaModule { }
