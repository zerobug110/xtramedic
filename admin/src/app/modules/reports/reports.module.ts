import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './page/reports/reports.component';



@NgModule({
  declarations: [
    ReportsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReportsComponent,
  ]
})
export class ReportsModule { }
