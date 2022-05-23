import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class HighlightDirective implements OnChanges {
  
  @Input() bgColor = ''; // O nome do selector deve ser o mesmo que o do decorator

  constructor(private el: ElementRef) {}
  
  ngOnChanges(): void { // É chamado quando um @Input é mudado.
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

}
