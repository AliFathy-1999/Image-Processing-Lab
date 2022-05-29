import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeimagesComponent } from './resizeimages.component';

describe('ResizeimagesComponent', () => {
  let component: ResizeimagesComponent;
  let fixture: ComponentFixture<ResizeimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
