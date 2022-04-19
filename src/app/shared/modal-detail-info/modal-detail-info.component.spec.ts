import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailInfoComponent } from './modal-detail-info.component';

describe('ModalDetailInfoComponent', () => {
  let component: ModalDetailInfoComponent;
  let fixture: ComponentFixture<ModalDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
