import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBasicEchartComponent } from './area-basic-echart.component';

describe('AreaBasicEchartComponent', () => {
  let component: AreaBasicEchartComponent;
  let fixture: ComponentFixture<AreaBasicEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaBasicEchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBasicEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
