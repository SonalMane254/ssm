import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpstracComponent } from './gpstrac.component';

describe('GpstracComponent', () => {
  let component: GpstracComponent;
  let fixture: ComponentFixture<GpstracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpstracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpstracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
