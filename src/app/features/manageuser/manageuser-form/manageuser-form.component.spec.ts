import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserFormComponent } from './manageuser-form.component';

describe('ManageuserFormComponent', () => {
  let component: ManageuserFormComponent;
  let fixture: ComponentFixture<ManageuserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageuserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
