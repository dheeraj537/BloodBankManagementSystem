import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbloodavailableComponent } from './viewbloodavailable.component';

describe('ViewbloodavailableComponent', () => {
  let component: ViewbloodavailableComponent;
  let fixture: ComponentFixture<ViewbloodavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbloodavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbloodavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
