import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveindustrymodalComponent } from './removeindustrymodal.component';

describe('RemoveindustrymodalComponent', () => {
  let component: RemoveindustrymodalComponent;
  let fixture: ComponentFixture<RemoveindustrymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveindustrymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveindustrymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
