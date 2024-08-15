import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPreloadimage]',
  standalone: true,
  host:{
    '(error)':'updateUrl()',
    '(load)':'load()',
    "[src]":'src'
  },

})
export class PreloadimageDirective {
  defult = 'https://via.placeholder.com/300';
  @Input()
  appPreloadimage:string = '';
  @Input()src?:string;
  constructor(private ele:ElementRef,private renderer:Renderer2) { }

  updateUrl(){
  this.src = this.defult;
}

}
