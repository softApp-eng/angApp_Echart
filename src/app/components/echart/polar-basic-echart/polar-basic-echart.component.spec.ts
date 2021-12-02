import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarBasicEchartComponent } from './polar-basic-echart.component';

describe('PolarBasicEchartComponent', () => {
  let component: PolarBasicEchartComponent;
  let fixture: ComponentFixture<PolarBasicEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarBasicEchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarBasicEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
