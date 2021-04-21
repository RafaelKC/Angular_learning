import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { NotFoundCurseComponent } from './not-found-curse/not-found-curse.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations:  [
        CursosComponent,
        CursoDetalheComponent,
        NotFoundCurseComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }
