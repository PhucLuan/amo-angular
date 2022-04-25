import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbtnComponent } from './checkbtn.component';

describe('CheckbtnComponent', () => {
  let component: CheckbtnComponent;
  let fixture: ComponentFixture<CheckbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
