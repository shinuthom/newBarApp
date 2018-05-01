import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDetailComponent } from './bar-detail.component';

describe('BarDetailComponent', () => {
  let component: BarDetailComponent;
  let fixture: ComponentFixture<BarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
