import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  url: string = 'https://rafaelchicovis.com';

  urlImagem: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FU14qbtHHcNU%2Fmaxresdefault.jpg&f=1&nofb=1';
 
  cursoAngular: boolean = false;

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 34,
  }

  getValor() {
    return 1;
  } 

  getCurtirCurso() {
    return false;
  }

  botaoClicado() {
    alert('Dan');
  }

  mouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  salvarValor(value: any) {
    this.valorSalvo = value
  }

  ngOnInit(): void {
  }

}
