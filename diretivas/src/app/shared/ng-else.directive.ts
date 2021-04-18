import { Directive, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myNgElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef = ViewContainerRef
  ) { }

}
