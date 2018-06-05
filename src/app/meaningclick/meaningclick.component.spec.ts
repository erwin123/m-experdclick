import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningclickComponent } from './meaningclick.component';

describe('MeaningclickComponent', () => {
  let component: MeaningclickComponent;
  let fixture: ComponentFixture<MeaningclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaningclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaningclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
