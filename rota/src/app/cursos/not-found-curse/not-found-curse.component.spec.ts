import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCurseComponent } from './not-found-curse.component';

describe('NotFoundCurseComponent', () => {
  let component: NotFoundCurseComponent;
  let fixture: ComponentFixture<NotFoundCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundCurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
