import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { basicAreaEchartModel } from '../echart.model';
import { EchartService } from '../echart.service';

@Component({
  selector: 'app-bar-basic-echart',
  templateUrl: './bar-basic-echart.component.html',
  styleUrls: ['./bar-basic-echart.component.css']
})
export class BarBasicEchartComponent implements OnInit {
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
    xAxis: {
      type: 'category',
      data:  chartData.map(m => (
        m.name
     )),
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: chartData.map(m => (
          m.code
       )),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
}


}

}
