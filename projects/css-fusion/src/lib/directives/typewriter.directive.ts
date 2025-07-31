import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[libTypewriter]',
})
export class TypewriterDirective implements AfterViewInit {
  private fullText: string = '';
  private index: number = 0;
  private caretElement!: HTMLElement;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.elRef.nativeElement;

    // Find and store caret
    this.caretElement = el.querySelector('.caret') as HTMLElement;

    // Extract full text excluding caret
    this.fullText = el.textContent?.replace(/\s+/g, ' ').trim() ?? '';

    // Clear all content
    el.innerHTML = '';

    // Add back caret
    if (this.caretElement) {
      el.appendChild(this.caretElement);
    }

    this.typeWriter();
  }

  private typeWriter(): void {
    const el = this.elRef.nativeElement;

    if (this.index < this.fullText.length) {
      const textNode = document.createTextNode(
        this.fullText.charAt(this.index)
      );
      el.insertBefore(textNode, this.caretElement);
      this.index++;
      setTimeout(() => this.typeWriter(), 150);
    }
  }
}