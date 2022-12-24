import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TopNavComponent,
    SideNavComponent
  ]
})
export class LayoutModule { }
