import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserTableComponent } from './manage-user-table.component';

describe('ManageUserTableComponent', () => {
  let component: ManageUserTableComponent;
  let fixture: ComponentFixture<ManageUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUserTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
