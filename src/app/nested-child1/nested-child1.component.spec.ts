import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChild1Component } from './nested-child1.component';

describe('NestedChild1Component', () => {
  let component: NestedChild1Component;
  let fixture: ComponentFixture<NestedChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
