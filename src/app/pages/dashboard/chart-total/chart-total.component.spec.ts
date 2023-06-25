import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTotalComponent } from './chart-total.component';

describe('ChartTotalComponent', () => {
  let component: ChartTotalComponent;
  let fixture: ComponentFixture<ChartTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartTotalComponent]
    });
    fixture = TestBed.createComponent(ChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
