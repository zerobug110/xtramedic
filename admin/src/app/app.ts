import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('admin');
}
