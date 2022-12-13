import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sample]'
})
export class StyleDirective {

  constructor(private element:ElementRef<any>) {}
  
  @HostListener('mouseenter')mouseEnterFunc(){
    
    
    this.element.nativeElement.style.color='orange';
    this.element.nativeElement.style['font-weight']='bold'
  }
  @HostListener('mouseleave')mouseLeaveFunc(){
    
    
    this.element.nativeElement.style.color='';
    this.element.nativeElement.style['font-size']='xx-large'
  }

}
