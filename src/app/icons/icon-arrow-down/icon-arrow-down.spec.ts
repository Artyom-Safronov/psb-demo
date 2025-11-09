import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconArrowDown } from './icon-arrow-down';

describe('IconArrowDown', () => {
  let component: IconArrowDown;
  let fixture: ComponentFixture<IconArrowDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconArrowDown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconArrowDown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
