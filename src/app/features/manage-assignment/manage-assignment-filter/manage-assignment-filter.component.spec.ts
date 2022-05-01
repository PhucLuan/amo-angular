import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssignmentFilterComponent } from './manage-assignment-filter.component';

describe('ManageAssignmentFilterComponent', () => {
  let component: ManageAssignmentFilterComponent;
  let fixture: ComponentFixture<ManageAssignmentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssignmentFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssignmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
