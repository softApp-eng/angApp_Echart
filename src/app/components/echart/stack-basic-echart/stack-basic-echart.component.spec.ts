import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackBasicEchartComponent } from './stack-basic-echart.component';

describe('StackBasicEchartComponent', () => {
  let component: StackBasicEchartComponent;
  let fixture: ComponentFixture<StackBasicEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackBasicEchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackBasicEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
