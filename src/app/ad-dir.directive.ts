import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdDir]'
})
export class AdDirDirective {

  constructor(public view: ViewContainerRef) { }

}
