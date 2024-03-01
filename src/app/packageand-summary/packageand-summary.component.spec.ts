import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageandSummaryComponent } from './packageand-summary.component';

describe('PackageandSummaryComponent', () => {
  let component: PackageandSummaryComponent;
  let fixture: ComponentFixture<PackageandSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageandSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
