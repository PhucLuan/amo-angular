import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbtnComponent } from './cancelbtn.component';

describe('CancelbtnComponent', () => {
  let component: CancelbtnComponent;
  let fixture: ComponentFixture<CancelbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
