import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedParentComponent } from './nested-parent.component';

describe('NestedParentComponent', () => {
  let component: NestedParentComponent;
  let fixture: ComponentFixture<NestedParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
