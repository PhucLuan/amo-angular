import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDeleteModalComponent } from './asset-delete-modal.component';

describe('AssetDeleteModalComponent', () => {
  let component: AssetDeleteModalComponent;
  let fixture: ComponentFixture<AssetDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
