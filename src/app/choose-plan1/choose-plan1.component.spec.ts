import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlan1Component } from './choose-plan1.component';

describe('ChoosePlan1Component', () => {
  let component: ChoosePlan1Component;
  let fixture: ComponentFixture<ChoosePlan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePlan1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
