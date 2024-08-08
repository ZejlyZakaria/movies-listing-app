import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrailerComponent } from './new-trailer.component';

describe('NewTrailerComponent', () => {
  let component: NewTrailerComponent;
  let fixture: ComponentFixture<NewTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
