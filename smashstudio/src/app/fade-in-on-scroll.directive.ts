import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    this.el.nativeElement.style.transform = 'translateY(30px)';
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.transform = 'translateY(0)';
    }
  }
}
