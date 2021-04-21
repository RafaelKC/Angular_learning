import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from 'src/app/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from 'src/app/form-debug/form-debug.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: []
})
export class TemplateModule { }
