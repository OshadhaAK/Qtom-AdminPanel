import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalremoveconfirmationComponent } from './modalremoveconfirmation.component';

describe('ModalremoveconfirmationComponent', () => {
  let component: ModalremoveconfirmationComponent;
  let fixture: ComponentFixture<ModalremoveconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalremoveconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalremoveconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
