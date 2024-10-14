import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State24Component } from './state24.component';

describe('State24Component', () => {
  let component: State24Component;
  let fixture: ComponentFixture<State24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [State24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(State24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
