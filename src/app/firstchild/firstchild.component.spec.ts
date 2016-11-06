/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstchildComponent } from './firstchild.component';

describe('FirstchildComponent', () => {
  let component: FirstchildComponent;
  let fixture: ComponentFixture<FirstchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
