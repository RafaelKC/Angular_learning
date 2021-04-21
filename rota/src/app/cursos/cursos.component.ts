import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];

  pagina: number = 0;

  inscricao: Subscription = new Subscription();

  nextPage() {
    this.pagina++;
    console.log(this.pagina)
    this._router.navigate(["/cursos"], { queryParams: {'pagina':this.pagina}})
  }

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this._route.queryParams.subscribe((queryParams:any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
