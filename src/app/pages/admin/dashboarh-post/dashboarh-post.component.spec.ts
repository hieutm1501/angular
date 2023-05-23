import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarhPostComponent } from './dashboarh-post.component';

describe('DashboarhPostComponent', () => {
  let component: DashboarhPostComponent;
  let fixture: ComponentFixture<DashboarhPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarhPostComponent]
    });
    fixture = TestBed.createComponent(DashboarhPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
