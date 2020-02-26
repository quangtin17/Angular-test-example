import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[hoverfocus]'
})
export class HoverFocusDirective {

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onHover() {
      this.backgroundColor = 'blue';
  }

  @HostListener('mouseout') onLeave() {
      this.backgroundColor = 'inherit';
  }
}
