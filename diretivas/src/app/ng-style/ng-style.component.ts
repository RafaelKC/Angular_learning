import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanhoFonte: number = 16;

  ativo: boolean = false;

  onClick() {
    this.ativo = !this.ativo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
