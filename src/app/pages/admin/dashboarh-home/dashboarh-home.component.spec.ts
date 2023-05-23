import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarhHomeComponent } from './dashboarh-home.component';

describe('DashboarhHomeComponent', () => {
  let component: DashboarhHomeComponent;
  let fixture: ComponentFixture<DashboarhHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarhHomeComponent]
    });
    fixture = TestBed.createComponent(DashboarhHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
