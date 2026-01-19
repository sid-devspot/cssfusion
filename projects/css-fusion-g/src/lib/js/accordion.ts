export class Accordion {
  constructor(private element: HTMLElement) {
    this.initialize();
  }

  initialize() {
    const body = this.element.querySelector('.acc-body') as HTMLElement;
    const stateArrow = this.element.querySelector('.state-arrow') as HTMLElement;

    if (body && body.classList.contains('acc-open')) {
      this.openAccordion(body, stateArrow);
    }

    const header = this.element.querySelector('.acc-head');
    if (header) {
      header.addEventListener('click', (event: Event) => this.toggleAccordion(event));
    }
  }

  toggleAccordion(event: Event) {
    const body = this.element.querySelector('.acc-body') as HTMLElement;
    const stateArrow = this.element.querySelector('.state-arrow') as HTMLElement;

    if (body) {
      const isOpen = body.classList.toggle('open');
      stateArrow.classList.toggle('open');

      if (isOpen) {
        this.openAccordion(body, stateArrow);
      } else {
        this.closeAccordion(body, stateArrow);
      }

      if (!this.element.querySelector('.acc-static')) {
        const group = this.element.closest('.accordion-grup') as HTMLElement;
        this.closeOtherAccordions(group);
      }
    }
  }

  openAccordion(body: HTMLElement, stateArrow: HTMLElement) {
    body.style.height = `${body.scrollHeight}px`;
    body.classList.add('open');
    stateArrow.classList.add('open');
  }

  closeAccordion(body: HTMLElement, stateArrow: HTMLElement) {
    body.classList.remove('open');
    stateArrow.classList.remove('open');
    body.style.height = '0';
    setTimeout(() => (body.style.height = ''), 500);
  }

  closeOtherAccordions(group: HTMLElement) {
    const otherAccordions = group.querySelectorAll('.accordion-main');
    otherAccordions.forEach((el) => {
      if (el !== this.element) {
        const body = el.querySelector('.acc-body') as HTMLElement;
        const stateArrow = el.querySelector('.state-arrow') as HTMLElement;
        if (body?.classList.contains('open')) {
          this.closeAccordion(body, stateArrow);
        }
      }
    });
  }
}