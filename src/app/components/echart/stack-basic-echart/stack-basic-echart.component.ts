import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { EchartService } from '../echart.service';
import { stackBasicEchartModel } from '../echart.model';


@Component({
  selector: 'app-stack-basic-echart',
  templateUrl: './stack-basic-echart.component.html',
  styleUrls: ['./stack-basic-echart.component.css']
})
export class StackBasicEchartComponent implements OnInit {
  _chartOption!: EChartsOption;
  subscription!: Subscription;

  constructor(private echartService: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getStackEchartData().subscribe(
      (data) => {
        this._intBasicLineEchart(data);
      })

  }

  _intBasicLineEchart(chartData: stackBasicEchartModel[]) {
    this._chartOption =
    {
      tooltip: {
        show: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: chartData[0].value.map(m => (
            m.name
          )),
        }
      ],
      yAxis: [
        {
          type: 'value'
        }],
      series: chartData.map(m => ({
        name : m.name,
        type : 'line',
        stack : 'stack',
        areaStyle : {},
        data : m.value.map(m =>({
          value :  m.value
        }))
      }))
      
    };

  }

}
