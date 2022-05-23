import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[borderColor]'
})
export class BorderColorDirective {
  @Input() borderColor = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
      this.el.nativeElement.style.borderLeft = `1px solid #dfdfdf`;
      this.el.nativeElement.style.borderRight = `1px solid #dfdfdf`;
      this.el.nativeElement.style.borderTop = `5px solid ${this.borderColor}`;
  }
  @HostListener('mouseout') onMouseOut() {
      this.el.nativeElement.style.borderColor = '#fff';
  }

}
