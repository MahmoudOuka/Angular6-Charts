import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charts';
  chartName='';

  view(chart){
    console.log(chart);
    this.chartName=chart;
  }
  chartsList=[
    {
      name:'Line Chart',
      id: 'line-chart'
    },
    {
      name:'Pie Chart',
      id: 'pie-chart'
    },
    {
      name:'Bar Vertical',
      id: 'bar-vertical'
    },
    {
      name:'Advanced Pie Chart',
      id: 'advanced-pie-chart'
    },
    {
      name:'Bubble Chart',
      id: 'bubble-chart'
    },
    {
      name:'Heat Map',
      id: 'heat-map'
    },
    {
      name:'Tree Map',
      id: 'tree-map'
    },
    {
      name:'Number Card',
      id: 'number-card'
    },
    {
      name:'Gauge Chart',
      id: 'gauge'
    },
    {
      name:'Line Reference Lines',
      id: 'line-reference-lines'
    },
  ];
}
