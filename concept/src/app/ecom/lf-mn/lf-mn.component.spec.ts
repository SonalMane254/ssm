import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfMnComponent } from './lf-mn.component';

describe('LfMnComponent', () => {
  let component: LfMnComponent;
  let fixture: ComponentFixture<LfMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
