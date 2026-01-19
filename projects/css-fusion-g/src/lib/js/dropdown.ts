export class Dropdown {
  constructor(private element: HTMLElement) {
    this.initialize();
  }

  initialize() {
    const menu = this.element.querySelector('.dd-menu') as HTMLElement;
    const list = this.element.querySelector('.dd-list') as HTMLElement;
    const options = this.element.querySelectorAll('.dd-option') as NodeListOf<HTMLElement>;
    const ddName = this.element.querySelector('.dd-name') as HTMLElement;

    if (menu && list) {
      menu.addEventListener('click', (event) => {
        event.stopPropagation();
        this.toggleDropdown(list);
      });

      document.addEventListener('click', (event) => {
        if (!this.element.contains(event.target as Node)) {
          this.closeDropdown(list);
        }
      });

      options.forEach((option) => {
        option.addEventListener('click', () => {
          this.updateSelectedOption(ddName, option.textContent || '');
          this.closeDropdown(list);
        });
      });
    }
  }

  toggleDropdown(list: HTMLElement) {
    if (list.classList.contains('dd-open')) {
      this.closeDropdown(list);
    } else {
      this.openDropdown(list);
    }
  }

  openDropdown(list: HTMLElement) {
    list.classList.add('dd-open');
  }

  closeDropdown(list: HTMLElement) {
    list.classList.remove('dd-open');
  }

  updateSelectedOption(ddName: HTMLElement, text: string) {
    ddName.textContent = text;
  }
}