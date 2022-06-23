/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Delimitationcomponent } from './Delimitationcomponent';

describe('IconsComponent', () => {
  let component: Delimitationcomponent;
  let fixture: ComponentFixture<Delimitationcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delimitationcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delimitationcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
