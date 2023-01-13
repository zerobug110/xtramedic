import { Component, OnInit, VERSION } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // standalone: true
})


export class DashboardComponent implements OnInit {


  rows: any;
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  //chart
  constructor() {}


  getRowHeight(row: { height: any; }) {
    return row.height;
  }

  ngOnInit(): void {
  }


}
