import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log-service.service';

@Injectable()
export class CursoService {

     emitirCursoCriado = new EventEmitter<string>();

     static criouNovoCurso = new EventEmitter<string>(); //Sendo estático, não precisa ser a mesma estancia para acessar o mesmo
     // !=
     private _cursos: string[] = ["Angular 2", "Java", "PhoneGab", "TypeScrip", "Python"] 

     constructor(private _logService: LogService) {
         console.log('Construindo o CursoService')
     }

    getCursos() {
        this._logService.log("Obtendo lista de cursos");
        return this._cursos;
    }

   addCurso(curso:string){
       this._logService.log(`Criando um novo curso: ${curso}`);
       this._cursos.push(curso);
       this.emitirCursoCriado.emit(curso);
       CursoService.criouNovoCurso.emit(curso) //sendo estática o 'this' não rola
   }

}