import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NotFoundCurseComponent } from './not-found-curse/not-found-curse.component';

const cursoRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'notfound', component: NotFoundCurseComponent },
  { path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
