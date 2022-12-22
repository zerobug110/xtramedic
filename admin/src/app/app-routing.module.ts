import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
// import { DashbaordPageComponent } from './dashboard/dashbaord-page/dashbaord-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
