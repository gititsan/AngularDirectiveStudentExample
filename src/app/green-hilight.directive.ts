import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreenHilight]'
})
export class GreenHilightDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }

}
