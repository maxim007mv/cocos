import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State25Component } from './state25.component';

describe('State25Component', () => {
  let component: State25Component;
  let fixture: ComponentFixture<State25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [State25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(State25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
