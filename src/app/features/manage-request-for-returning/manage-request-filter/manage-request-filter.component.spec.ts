import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRequestFilterComponent } from './manage-request-filter.component';

describe('ManageRequestFilterComponent', () => {
  let component: ManageRequestFilterComponent;
  let fixture: ComponentFixture<ManageRequestFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRequestFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRequestFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
