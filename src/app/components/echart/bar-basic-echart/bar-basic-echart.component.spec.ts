import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBasicEchartComponent } from './bar-basic-echart.component';

describe('BarBasicEchartComponent', () => {
  let component: BarBasicEchartComponent;
  let fixture: ComponentFixture<BarBasicEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarBasicEchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBasicEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
