import { Component, OnInit } from '@angular/core';

import { CursoService } from './exemplo.service';
 
@Component({
  selector: 'app-servico-exemplo',
  templateUrl: './servico-exemplo.component.html',
  styleUrls: ['./servico-exemplo.component.css']
})
export class ServicoExemploComponent implements OnInit {

  cursos: string[] = [];
  //cursoService: CursoService;

  constructor(private _cursoService: CursoService /* Melhor jeito de fazer */) {
    //this.cursoService = new CursoService(); Mode trabalhoso, não perfeito de fazer
   //this.cursoService = _cursoService;
  }

  ngOnInit(): void {
    this.cursos = this._cursoService.getCursos();

/*     this._cursoService.emitirCursoCriado.subscribe(
       curso => {console.log(curso)}
    ); */
  
    CursoService.criouNovoCurso.subscribe( //Por ser estático funciona
      curso => this.cursos.push(curso)
   );
  }

}
