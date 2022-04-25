import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowcirclebtnComponent } from './arrowcirclebtn.component';

describe('ArrowcirclebtnComponent', () => {
  let component: ArrowcirclebtnComponent;
  let fixture: ComponentFixture<ArrowcirclebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowcirclebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowcirclebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
