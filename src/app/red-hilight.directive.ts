 import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedHilight]'
})
export class RedHilightDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

}
