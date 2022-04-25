import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcirclebtnComponent } from './xcirclebtn.component';

describe('XcirclebtnComponent', () => {
  let component: XcirclebtnComponent;
  let fixture: ComponentFixture<XcirclebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XcirclebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XcirclebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
