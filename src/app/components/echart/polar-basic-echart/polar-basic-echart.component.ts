import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { basicAreaEchartModel } from '../echart.model';
import { EchartService } from '../echart.service';

@Component({
  selector: 'app-polar-basic-echart',
  templateUrl: './polar-basic-echart.component.html',
  styleUrls: ['./polar-basic-echart.component.css']
})
export class PolarBasicEchartComponent implements OnInit {
  _chartOption!: EChartsOption;
  subscription!: Subscription;
  _isDarkMode : boolean = false;
  _theme : string = '';
  constructor(private echartService : EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getAreaChartData().subscribe(
      (data)=>{
        this._intBasicLineEchart(data);
      })
  }

  private _intBasicLineEchart(chartData : basicAreaEchartModel[] ){
    this._theme = this._isDarkMode ? 'dark' : '';
    this._chartOption = {
    
    title: [
      {
        text: 'Tangential Polar Bar Label Position (middle)'
      }
    ],
    polar: {
      radius: [30, '80%']
    },
    angleAxis: {
      max: 4,
      startAngle: 75
    },
    radiusAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd']
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    }
    

}}
}

