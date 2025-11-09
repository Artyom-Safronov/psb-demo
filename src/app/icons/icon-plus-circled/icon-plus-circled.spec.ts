import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlusCircled } from './icon-plus-circled';

describe('IconPlusCircled', () => {
  let component: IconPlusCircled;
  let fixture: ComponentFixture<IconPlusCircled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPlusCircled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPlusCircled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
