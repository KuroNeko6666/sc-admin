import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCreatedComponent } from './chart-created.component';

describe('ChartCreatedComponent', () => {
  let component: ChartCreatedComponent;
  let fixture: ComponentFixture<ChartCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartCreatedComponent]
    });
    fixture = TestBed.createComponent(ChartCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
