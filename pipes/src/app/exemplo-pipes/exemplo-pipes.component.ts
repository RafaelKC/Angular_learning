import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: "Livro Sobre 'N' Coisas",
    rating: 4.8648,
    pages: 314,
    price: 44.99,
    data: new Date(2016, 5, 23),
    url: 'http://a.com/glgjpRP'
  };

  livros: string[] = ['Angular 2', 'Java'];

  filtro: string = '';

  addNewValue(nValue:string) {
    this.livros.push(nValue);
    console.log(nValue)
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v:any) =>{
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Valor assíncrono"), 2000 )  
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
