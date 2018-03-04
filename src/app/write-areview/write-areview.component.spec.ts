import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAreviewComponent } from './write-areview.component';

describe('WriteAreviewComponent', () => {
  let component: WriteAreviewComponent;
  let fixture: ComponentFixture<WriteAreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteAreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
