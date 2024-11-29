import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWithParamsComponent } from './hello-with-params.component';

describe('HelloWithParamsComponent', () => {
  let component: HelloWithParamsComponent;
  let fixture: ComponentFixture<HelloWithParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWithParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
