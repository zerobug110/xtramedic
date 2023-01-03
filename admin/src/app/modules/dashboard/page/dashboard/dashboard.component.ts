import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {multi} from './data'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  rows: any;
  expanded = {};
  timeout: any;
  ColumnMode = ColumnMode;

  // chart
  multi: any[];
  view: any[] = [700, 400];
    // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';


  colorScheme = {
        domain: ['#5AA454', '#C7B42C', '#AAAAAA']
      };

      constructor() {
        Object.assign(this, { multi })
      }

     onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
      }

      onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
      }

      onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
      }





  getRowHeight(row: { height: any; }) {
    return row.height;
  }

  ngOnInit(): void {
  }

}

// multi: any[];
//   view: any[] = [700, 400];

//   // options
//   showXAxis: boolean = true;
//   showYAxis: boolean = true;
//   gradient: boolean = true;
//   showLegend: boolean = true;
//   showXAxisLabel: boolean = true;
//   xAxisLabel: string = 'Country';
//   showYAxisLabel: boolean = true;
//   yAxisLabel: string = 'Population';
//   legendTitle: string = 'Years';

//   colorScheme = {
//     domain: ['#5AA454', '#C7B42C', '#AAAAAA']
//   };

//   constructor() {
//     Object.assign(this, { multi })
//   }

//  onSelect(data): void {
//     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
//   }

//   onActivate(data): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }

//   onDeactivate(data): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }
