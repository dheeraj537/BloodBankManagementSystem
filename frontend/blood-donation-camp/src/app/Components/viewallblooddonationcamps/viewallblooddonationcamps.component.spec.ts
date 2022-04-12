import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallblooddonationcampsComponent } from './viewallblooddonationcamps.component';

describe('ViewallblooddonationcampsComponent', () => {
  let component: ViewallblooddonationcampsComponent;
  let fixture: ComponentFixture<ViewallblooddonationcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallblooddonationcampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallblooddonationcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
