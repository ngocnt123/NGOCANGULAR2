import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforofComponent } from './ngforof.component';

describe('NgforofComponent', () => {
  let component: NgforofComponent;
  let fixture: ComponentFixture<NgforofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforofComponent]
    });
    fixture = TestBed.createComponent(NgforofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
