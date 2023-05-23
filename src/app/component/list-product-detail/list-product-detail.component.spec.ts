import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductDetailComponent } from './list-product-detail.component';

describe('ListProductDetailComponent', () => {
  let component: ListProductDetailComponent;
  let fixture: ComponentFixture<ListProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductDetailComponent]
    });
    fixture = TestBed.createComponent(ListProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
