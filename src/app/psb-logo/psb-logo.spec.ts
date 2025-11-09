import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsbLogo } from './psb-logo';

describe('PsbLogo', () => {
  let component: PsbLogo;
  let fixture: ComponentFixture<PsbLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsbLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsbLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
