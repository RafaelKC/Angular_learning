import { Component, OnInit } from '@angular/core';

import { CursoService } from '../servico-exemplo/exemplo.service'; //Como é um componente filho: divide a estancia com o component pai

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

   curso:string = '';

  constructor(private _cursoService: CursoService) { }

  ngOnInit(): void {
    this._cursoService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    ) //Como divide a estancia com o component pai, funciona
  }

}
