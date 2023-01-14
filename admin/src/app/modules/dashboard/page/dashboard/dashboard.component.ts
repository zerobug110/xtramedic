import { Component, OnInit, VERSION } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ChartConfiguration, ChartOptions } from 'chart.js';

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

  //LIne chart
    public lineChartData: ChartConfiguration<'line'>['data'] = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false
    };
    public lineChartLegend = true;


    //pie chat

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor() {}


  getRowHeight(row: { height: any; }) {
    return row.height;
  }

  ngOnInit(): void {
  }


}
