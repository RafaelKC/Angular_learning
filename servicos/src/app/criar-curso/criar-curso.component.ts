import { Component, OnInit } from '@angular/core';

import { CursoService } from '../servico-exemplo/exemplo.service'

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursoService] //Para ter mais de uma estancia na aplicação
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []

  onClick(value:string) {
    this._cursoService.addCurso(value);
  }

  constructor(private _cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos = this._cursoService.getCursos()
  } //Como existe duas estancias, não funciona entre elas

}
