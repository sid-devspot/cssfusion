import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionCodeComponent } from './motion-code.component';

describe('MotionCodeComponent', () => {
  let component: MotionCodeComponent;
  let fixture: ComponentFixture<MotionCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotionCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
