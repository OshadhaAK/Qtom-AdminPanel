import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewindustrymodalComponent } from './newindustrymodal.component';

describe('NewindustrymodalComponent', () => {
  let component: NewindustrymodalComponent;
  let fixture: ComponentFixture<NewindustrymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewindustrymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewindustrymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
