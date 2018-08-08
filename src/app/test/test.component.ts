import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import {
  single,
  multi,
  bubble,
  treemap,
  timelineFilterBarData,
  fiscalYearReport
} from '../data';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  _single=single;
  ngOnInit() {
  }
  theme = 'dark';
  chartGroups: any[];
  chart: any;
  realTimeData: boolean = false;
  countries: any[];
  single: any[];
  multi: any[];
  fiscalYearReport: any[];
  dateData: any[];
  dateDataWithRange: any[];
  calendarData: any[];
  statusData: any[];
  sparklineData: any[];
  timelineFilterBarData: any[];
  graph: { links: any[]; nodes: any[] };
  bubble: any;
  linearScale: boolean = false;
  range: boolean = false;

  view=[700, 300];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  lineChartMulti = [
    {
        "name": "Germany",
        "series": [
        {
            "name": "2010",
            "value": 700
        },
        {
            "name": "2011",
            "value": 750
        },
        {
            "name": "2012",
            "value": 775
        },
        {
            "name": "2013",
            "value": 725
        },
        {
            "name": "2014",
            "value": 750
        },
        {
            "name": "2015",
            "value": 800
        },
        {
            "name": "2016",
            "value": 860
        }
        ]
    },
    {
      "name": "Egypt",
      "series": [
      {
          "name": "2010",
          "value": 710
      },
      {
          "name": "2011",
          "value": 760
      },
      {
          "name": "2012",
          "value": 785
      },
      {
          "name": "2013",
          "value": 735
      },
      {
          "name": "2014",
          "value": 760
      },
      {
          "name": "2015",
          "value": 810
      },
      {
          "name": "2016",
          "value": 870
      }
      ]
    }];
  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType: string = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis',
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  closedCurveType: string = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = ['Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'];

  colorSets: any;
  colorScheme= {
    domain: ['#1CBCD8', '#FF8D60', '#FF586B', '#AAAAAA']
  };
  schemeType: string = 'ordinal';
  selectedColorScheme: string;
  rangeFillOpacity: number = 0.15;

  // Override colors for certain values
  // customColors: any[] = [
  //   {
  //     name: 'Germany',
  //     value: '#0000ff'
  //   }
  // ];
  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;
  maxLabelLength=10;

  // line, area
  autoScale = true;
  timeline = false;

  // margin
  margin: boolean = false;
  marginTop: number = 40;
  marginRight: number = 40;
  marginBottom: number = 40;
  marginLeft: number = 40;

  // gauge
  gaugeMin: number = 0;
  gaugeMax: number = 100;
  gaugeLargeSegments: number = 10;
  gaugeSmallSegments: number = 5;
  gaugeTextValue: string = '';
  gaugeUnits: string = 'alerts';
  gaugeAngleSpan: number = 240;
  gaugeStartAngle: number = -120;
  gaugeShowAxis: boolean = true;
  gaugeValue: number = 50; // linear gauge value
  gaugePreviousValue: number = 70;

  // heatmap
  heatmapMin: number = 0;
  heatmapMax: number = 50000;


  // demos
  totalSales = 0;
  salePrice = 100;
  personnelCost = 100;

  mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
  mathFunction: (o: any) => any;

  treemap: any[];
  treemapPath: any[] = [];
  sumBy: string = 'Size';

  // Reference lines
  showRefLines: boolean = true;
  showRefLabels: boolean = true;

  // Supports any number of reference lines.
  refLines = [{ value: 42500, name: 'Maximum' }, { value: 37750, name: 'Average' }, { value: 33000, name: 'Minimum' }];
  onSelect(event) {
    console.log(event);
  }
}
