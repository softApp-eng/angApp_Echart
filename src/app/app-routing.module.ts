import { AreaBasicEchartComponent } from './components/echart/area-basic-echart/area-basic-echart.component';
import { BasicLineComponent } from './components/echart/basic-line/basic-line.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarBasicEchartComponent } from './components/echart/bar-basic-echart/bar-basic-echart.component';
import { PolarBasicEchartComponent } from './components/echart/polar-basic-echart/polar-basic-echart.component';
import { StackBasicEchartComponent } from './components/echart/stack-basic-echart/stack-basic-echart.component';

const routes: Routes = [
  { path : 'basic-line-echart' , component : BasicLineComponent},
  { path : 'area-line-echart' , component : AreaBasicEchartComponent },
  { path : 'bar-line-echart' , component : BarBasicEchartComponent},
  { path : 'polar-basic-echart' , component : PolarBasicEchartComponent},
  {path : 'stack-basic-echart', component : StackBasicEchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
