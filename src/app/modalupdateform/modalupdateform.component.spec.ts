import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalupdateformComponent } from './modalupdateform.component';

describe('ModalupdateformComponent', () => {
  let component: ModalupdateformComponent;
  let fixture: ComponentFixture<ModalupdateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalupdateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
