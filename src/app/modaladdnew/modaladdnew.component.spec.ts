import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaladdnewComponent } from './modaladdnew.component';

describe('ModaladdnewComponent', () => {
  let component: ModaladdnewComponent;
  let fixture: ComponentFixture<ModaladdnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaladdnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaladdnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
