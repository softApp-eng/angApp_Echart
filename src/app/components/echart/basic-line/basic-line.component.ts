import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from '../echart.service';
import { basicLineEchartModel } from '../echart.model';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.css']
})
export class BasicLineComponent implements OnInit {
  _chartOption!: EChartsOption;
  subscription!: Subscription;

  constructor(private echartService : EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getLineChartData().subscribe(
      (data)=>{
        this._intBasicLineEchart(data);
      })
    
  }
   private _intBasicLineEchart(chartData : basicLineEchartModel[] ){
  this._chartOption = 
    {
     tooltip : {
       show : true
     },
     background : 'transparent',
     xAxis  :  {
      type: "category",
      data: 
         ["agabli","medi","khalid"]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data:  chartData.map(m => ({
          value : m.value
        })),
        type: 'line'
      }]
  };
   }
   }

