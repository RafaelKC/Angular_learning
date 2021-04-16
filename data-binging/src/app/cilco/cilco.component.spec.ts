import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CilcoComponent } from './cilco.component';

describe('CilcoComponent', () => {
  let component: CilcoComponent;
  let fixture: ComponentFixture<CilcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CilcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CilcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
