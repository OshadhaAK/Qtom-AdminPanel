import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateindustrymodalComponent } from './updateindustrymodal.component';

describe('UpdateindustrymodalComponent', () => {
  let component: UpdateindustrymodalComponent;
  let fixture: ComponentFixture<UpdateindustrymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateindustrymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateindustrymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
