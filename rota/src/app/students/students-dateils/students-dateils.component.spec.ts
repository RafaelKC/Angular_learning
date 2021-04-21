import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDateilsComponent } from './students-dateils.component';

describe('StudentsDateilsComponent', () => {
  let component: StudentsDateilsComponent;
  let fixture: ComponentFixture<StudentsDateilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDateilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDateilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
