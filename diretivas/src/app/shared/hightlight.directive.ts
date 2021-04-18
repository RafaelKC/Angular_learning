import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlight;
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') backgroundColor: any;

  @Input() defaultColor: string = 'white';

  @Input('Highlight') highlight: string = 'yellow;'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
