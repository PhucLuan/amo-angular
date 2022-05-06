import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRequestTableComponent } from './manage-request-table.component';

describe('ManageRequestTableComponent', () => {
  let component: ManageRequestTableComponent;
  let fixture: ComponentFixture<ManageRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRequestTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
