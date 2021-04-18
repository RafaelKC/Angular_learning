import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoExemploComponent } from './servico-exemplo.component';

describe('ServicoExemploComponent', () => {
  let component: ServicoExemploComponent;
  let fixture: ComponentFixture<ServicoExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoExemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
