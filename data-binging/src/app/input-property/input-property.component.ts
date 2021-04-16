import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ["nomeCurso:nome"] outra forma de declarar inputs
})
export class InputPropertyComponent implements OnInit {

  @Input('nome' /**nome sera o nome externo da propriedade*/) nomeCurso: string = ''; //expondo a propriedade nome para ser usada na chamada da tag

  constructor() { }

  ngOnInit(): void {
  }

}
