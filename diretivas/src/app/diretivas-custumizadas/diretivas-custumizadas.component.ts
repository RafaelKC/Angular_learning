import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-custumizadas',
  templateUrl: './diretivas-custumizadas.component.html',
  styleUrls: ['./diretivas-custumizadas.component.css']
})
export class DiretivasCustumizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  onClick() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
