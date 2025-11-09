import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMinusCircled } from './icon-minus-circled';

describe('IconMinusCircled', () => {
  let component: IconMinusCircled;
  let fixture: ComponentFixture<IconMinusCircled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMinusCircled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMinusCircled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
