import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State15Component } from './state15.component';

describe('State15Component', () => {
  let component: State15Component;
  let fixture: ComponentFixture<State15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [State15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(State15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
