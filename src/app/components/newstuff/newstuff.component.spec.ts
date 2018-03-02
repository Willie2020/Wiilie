import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstuffComponent } from './newstuff.component';

describe('NewstuffComponent', () => {
  let component: NewstuffComponent;
  let fixture: ComponentFixture<NewstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
