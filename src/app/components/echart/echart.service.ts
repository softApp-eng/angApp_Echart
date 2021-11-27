import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basicLineEchartModel } from './echart.model';
@Injectable({
  providedIn: 'root'
})
export class EchartService {

  constructor(private httpClient:HttpClient) { }

  getLineChartData():Observable<basicLineEchartModel[]>{
    return this.httpClient.get<basicLineEchartModel[]>('assets/echart/basic-line-data.json');
  }
}
