import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CursosGuard } from "../guards/cursos.guard";
import { StudentsDeactivateGuard } from "../guards/students-deactivate.guard";
import { StudentsDatailResolver } from "./guards/students-detail.resolver";
import { StudentsDateilsComponent } from "./students-dateils/students-dateils.component";
import { StudentsFormsComponent } from "./students-forms/students-forms.component";
import { StudentsComponent } from "./students.component";

const studentsRoutes: Routes = [
    //Components filhos <<router-outlet></router-outlet>
    { path: '', 
      canActivateChild: [CursosGuard],
      canDeactivate: [StudentsDeactivateGuard],
      component: StudentsComponent, children: [
        { path: 'new', component: StudentsFormsComponent },
        { path: ':id', 
          component: StudentsDateilsComponent,
          resolve: {student : StudentsDatailResolver }
        }, //Para não dar interferência, toda rota hardcoded deve ser declarada primeiro (avaliada antes)
        { path: ':id/edit', component: StudentsFormsComponent },
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(studentsRoutes),
    ],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}