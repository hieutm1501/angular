import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarhPutComponent } from './dashboarh-put.component';

describe('DashboarhPutComponent', () => {
  let component: DashboarhPutComponent;
  let fixture: ComponentFixture<DashboarhPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarhPutComponent]
    });
    fixture = TestBed.createComponent(DashboarhPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
