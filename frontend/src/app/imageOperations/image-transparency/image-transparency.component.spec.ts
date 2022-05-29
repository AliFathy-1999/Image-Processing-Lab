import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTransparencyComponent } from './image-transparency.component';

describe('ImageTransparencyComponent', () => {
  let component: ImageTransparencyComponent;
  let fixture: ComponentFixture<ImageTransparencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTransparencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTransparencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
