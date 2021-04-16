import { 
  AfterContentChecked, 
  Component, 
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  AfterViewInit, 
  AfterViewChecked, 
  AfterContentInit,
  Input 
} from '@angular/core';

@Component({
  selector: 'app-cilco',
  templateUrl: './cilco.component.html',
  styleUrls: ['./cilco.component.css']
})
export class CilcoComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {


  @Input() valorInicial: number = 10;

  constructor() {   
    this.log('Contrutor')
  }

  ngOnChanges() {
    this.log('Changes')
  }

  ngOnInit(): void {
    this.log('OnInit')
  }

  ngDoCheck() {
    this.log('DoCheck')
  }

  ngOnDestroy() {
    this.log("OnDestroy")
  }

  ngAfterViewInit() {
    this.log("AfterViewInit")
  }

  ngAfterViewChecked() {
    this.log("AfterViewChecked")
  }

  ngAfterContentInit() {
    this.log("AfterContentInit")
  }

  ngAfterContentChecked() {
    this.log("AfterContentChecked")
  }

  private log(text: string) {
    console.log(text)
  }

}
