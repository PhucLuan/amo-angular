import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRequestForReturningComponent } from './manage-request-for-returning.component';

describe('ManageRequestForReturningComponent', () => {
  let component: ManageRequestForReturningComponent;
  let fixture: ComponentFixture<ManageRequestForReturningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRequestForReturningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRequestForReturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
