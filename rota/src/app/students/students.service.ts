import { Injectable } from '@angular/core';

import { Student } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students: any[] = [
    {id: 1, name: "Rafael", email: "rafael@gmail.com"},
    {id: 2, name: "Caio", email: "caio@gmail.com"},
    {id: 3, name: "Paulo", email: "paulo@gmail.com"},
    {id: 4, name: "Mylena", email: "mylena@gmail.com"},
  ];

  getStudents() {
    return this._students
  }

  getStudent(id:number) : Student | undefined {
    return this.getStudents().find(student => student.id == id);
  }

  constructor() { }
}
