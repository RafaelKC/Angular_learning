import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoService } from '../servico-exemplo/exemplo.service';
import { CriarCursoComponent } from './criar-curso.component'
import { ReceberCursoCriadoComponent} from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CriarCursoComponent],
  providers: [
    CursoService /* colocando o serviço no module da aplicação é estanciado apenas uma vez */
  ],
})
export class CriarCursoModule { }
