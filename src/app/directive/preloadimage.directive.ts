import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPreloadimage]',
  standalone: true,
  host:{
    '(error)':'updateUrl()',
    "[src]":'src'
  },

})
export class PreloadimageDirective {
  @Input()src?:string;
  @Input()defult!:string;
  constructor() { }

  updateUrl(){
  this.src = this.defult;
}

}
