import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoService } from '../servico-exemplo/exemplo.service';
import { ServicoExemploComponent } from './servico-exemplo.component'

@NgModule({
  declarations: [
    ServicoExemploComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ServicoExemploComponent],
  providers: [
    CursoService /* colocando o serviço no module da aplicação é estanciado apenas uma vez */
  ],
})
export class CursoModule { }
