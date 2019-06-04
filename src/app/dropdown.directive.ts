import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show')  isOpen = false

  
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('click') toggleOpen(){
    let part = this.el.nativeElement.querySelector('.dropdown-menu')
    this.renderer.setElementClass(part, 'show', this.isOpen= !this.isOpen)
    // this.isOpen =! this.isOpen
  }
}
