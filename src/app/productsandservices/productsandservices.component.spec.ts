import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsandservicesComponent } from './productsandservices.component';

describe('ProductsandservicesComponent', () => {
  let component: ProductsandservicesComponent;
  let fixture: ComponentFixture<ProductsandservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsandservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsandservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
