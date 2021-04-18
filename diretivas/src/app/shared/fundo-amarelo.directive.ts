import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]' //Colocando o nome da tag ante do seletor da diretiva, só será aplicado a ela
})
export class FundoAmareloDirective {

   
  // Evitar usar o ElementRef, perigoso, usar o Renderer
  constructor(
              private _elementRef: ElementRef, /* injeção de dependência */
              private _renderer: Renderer2 ) { 
    //console.log(_elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = "yellow"
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow')
  }

}
