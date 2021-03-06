import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = NaN;
  inscricao: Subscription = new Subscription();
  curso: any; 

  constructor(
    private _route: ActivatedRoute,
    private _cursoService: CursosService,
    private _router: Router,
    ) {
    //this.id = this._route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params:any) => {
        this.id = params['id'];
    });

    this.curso = this._cursoService.getCurso(this.id)

    if (this.curso == undefined) {
      this._router.navigate(['/cursos/notfound'])
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
