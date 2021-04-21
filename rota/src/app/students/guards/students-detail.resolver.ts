import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../students';
import { StudentsService } from '../students.service';

@Injectable({ providedIn: 'root' })
export class StudentsDatailResolver implements Resolve<Student> {

    constructor(private _studentsService: StudentsService){
        
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<Student> | Promise<Student> | any | Student {


        let id = route.params['id'];
        return this._studentsService.getStudent(id)
    }
}