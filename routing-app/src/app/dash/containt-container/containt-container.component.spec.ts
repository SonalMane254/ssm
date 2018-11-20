import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaintContainerComponent } from './containt-container.component';

describe('ContaintContainerComponent', () => {
  let component: ContaintContainerComponent;
  let fixture: ComponentFixture<ContaintContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaintContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaintContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
