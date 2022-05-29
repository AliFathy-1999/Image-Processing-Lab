import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurImagesComponent } from './blur-images.component';

describe('BlurImagesComponent', () => {
  let component: BlurImagesComponent;
  let fixture: ComponentFixture<BlurImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
