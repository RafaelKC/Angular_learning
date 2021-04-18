import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightComMouse]'
})
export class HighlightComMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
/*     this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    ) */
    this.backgroundColor = 'yellow';
  };

  @HostListener('mouseleave') onMouseLeave() {
/*     this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    ) */
    this.backgroundColor = 'white';
  };

  @HostBinding('style.backgroundColor') backgroundColor: any;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) { }

}
