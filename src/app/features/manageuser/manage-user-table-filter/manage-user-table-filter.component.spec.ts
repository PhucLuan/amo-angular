import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserTableFilterComponent } from './manage-user-table-filter.component';

describe('ManageUserTableFilterComponent', () => {
  let component: ManageUserTableFilterComponent;
  let fixture: ComponentFixture<ManageUserTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUserTableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
