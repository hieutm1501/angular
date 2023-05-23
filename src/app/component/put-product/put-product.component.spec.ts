import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProductComponent } from './put-product.component';

describe('PutProductComponent', () => {
  let component: PutProductComponent;
  let fixture: ComponentFixture<PutProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutProductComponent]
    });
    fixture = TestBed.createComponent(PutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
