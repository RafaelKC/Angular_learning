import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustumizadasComponent } from './diretivas-custumizadas.component';

describe('DiretivasCustumizadasComponent', () => {
  let component: DiretivasCustumizadasComponent;
  let fixture: ComponentFixture<DiretivasCustumizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustumizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustumizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
