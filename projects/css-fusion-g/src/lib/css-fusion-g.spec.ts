import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFusionG } from './css-fusion-g';

describe('CssFusionG', () => {
  let component: CssFusionG;
  let fixture: ComponentFixture<CssFusionG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssFusionG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFusionG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
