import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssignmentTableComponent } from './manage-assignment-table.component';

describe('ManageAssignmentTableComponent', () => {
  let component: ManageAssignmentTableComponent;
  let fixture: ComponentFixture<ManageAssignmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssignmentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssignmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
