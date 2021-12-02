import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { basicAreaEchartModel, basicLineEchartModel } from '../echart.model';
import { EchartService } from '../echart.service';

@Component({
  selector: 'app-area-basic-echart',
  templateUrl: './area-basic-echart.component.html',
  styleUrls: ['./area-basic-echart.component.css']
})
export class AreaBasicEchartComponent implements OnInit {
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
    tooltip : {
      show : true
    },
    background : 'transparent',
      xAxis: 
      {
      type: 'category',
      boundaryGap: false,
      data:  chartData.map(m => (
        m.name
     )),
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data:  chartData.map(m => (
          m.code
       )),
        type: 'line',
        areaStyle: {}
      }
    ]
}
  }
}