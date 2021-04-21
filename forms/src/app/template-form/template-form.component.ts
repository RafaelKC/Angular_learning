import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: any = {
    name: null,
    email: null
  }

  onSubmit(form: Form){
    console.log(form)

    //console.log(this.user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
