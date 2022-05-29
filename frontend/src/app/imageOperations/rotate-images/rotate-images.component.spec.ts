import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateImagesComponent } from './rotate-images.component';

describe('RotateImagesComponent', () => {
  let component: RotateImagesComponent;
  let fixture: ComponentFixture<RotateImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
