import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basicAreaEchartModel, basicLineEchartModel, stackBasicEchartModel } from './echart.model';
@Injectable({
  providedIn: 'root'
})
export class EchartService {

  constructor(private httpClient:HttpClient) { }

  getLineChartData():Observable<basicLineEchartModel[]>{
    return this.httpClient.get<basicLineEchartModel[]>('assets/echart/basic-line-data.json');
  }
  getAreaChartData():Observable<basicAreaEchartModel[]>{
    return this.httpClient.get<basicAreaEchartModel[]>('assets/echart/area-basic-data.json');
  }
  getStackEchartData():Observable<stackBasicEchartModel[]>{
    return this.httpClient.get<stackBasicEchartModel[]>('assets/echart/stack-basic-data.json');
  }
}
