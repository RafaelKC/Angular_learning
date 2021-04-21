import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../students';

import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-dateils',
  templateUrl: './students-dateils.component.html',
  styleUrls: ['./students-dateils.component.css']
})
export class StudentsDateilsComponent implements OnInit, OnDestroy {

  student: any;

  subs: Subscription = new Subscription();

  constructor(
    private _studentsService: StudentsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs = this._route.data.subscribe(
      (info) => {
        this.student = info.student;
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
