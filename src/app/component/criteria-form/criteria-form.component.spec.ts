import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaFormComponent } from './criteria-form.component';

describe('CriteriaFormComponent', () => {
  let component: CriteriaFormComponent;
  let fixture: ComponentFixture<CriteriaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriteriaFormComponent]
    });
    fixture = TestBed.createComponent(CriteriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
