import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BasicLineComponent } from './components/echart/basic-line/basic-line.component';
import { HttpClientModule } from '@angular/common/http';
import { AreaBasicEchartComponent } from './components/echart/area-basic-echart/area-basic-echart.component';
import { FormsModule } from '@angular/forms';
import { BarBasicEchartComponent } from './components/echart/bar-basic-echart/bar-basic-echart.component';
import { PolarBasicEchartComponent } from './components/echart/polar-basic-echart/polar-basic-echart.component';
import { StackBasicEchartComponent } from './components/echart/stack-basic-echart/stack-basic-echart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicLineComponent,
    AreaBasicEchartComponent,
    BarBasicEchartComponent,
    PolarBasicEchartComponent,
    StackBasicEchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
