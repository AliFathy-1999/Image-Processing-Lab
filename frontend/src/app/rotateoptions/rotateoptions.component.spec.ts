import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateoptionsComponent } from './rotateoptions.component';

describe('RotateoptionsComponent', () => {
  let component: RotateoptionsComponent;
  let fixture: ComponentFixture<RotateoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
