import { Directive, ElementRef, Input, input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSearchfield]',
  standalone: true
})
export class SearchfieldDirective implements OnChanges {
@Input()
appSearchfield:boolean = false;
  constructor(private ele:ElementRef,private render:Renderer2) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appSearchfield) {
      this.render.setStyle(
        this.ele.nativeElement,'width',
        '150px'
      )

    }else{
        this.render.setStyle(
          this.ele.nativeElement,'width',
          '0px')
      }
      
    }
  }

