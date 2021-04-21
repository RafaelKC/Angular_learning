import { Component, OnInit } from '@angular/core';


import { FormCanDeactivate } from './form';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, FormCanDeactivate{

  private acesso: boolean = false;

  podeMudar() : boolean {
    return !this.acesso;
  }

  acessou() {
    this.acesso = true;
  }

  students: any[] = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students = this._studentsService.getStudents()
  }

}
