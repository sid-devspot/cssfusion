import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  standalone: false,
})
export class ComponentsComponent {
  @ViewChild('navList') navList!: ElementRef<HTMLDivElement>;
  componentList: any = [
    {
      router: 'Component_Accordion',
      icon: 'view_day',
      text: 'Accordion',
    },
    {
      router: 'Component_Button',
      icon: 'smart_button',
      text: 'Button',
    },
    {
      router: 'Component_Card',
      icon: 'credit_card',
      text: 'Card',
    },
    {
      router: 'Component_Dropdown',
      icon: 'arrow_drop_down',
      text: 'Dropdown',
    },
    {
      router: 'Component_Input',
      icon: 'input',
      text: 'Input',
    },
    {
      router: 'Component_Menubar',
      icon: 'menu',
      text: 'Menubar',
    },
    {
      router: 'Component_Nav',
      icon: 'navigation',
      text: 'Nav',
    },
    {
      router: 'Component_Table',
      icon: 'table_chart',
      text: 'Table',
    },
    {
      router: 'Component_Tab',
      icon: 'tab',
      text: 'Tab',
    },
    {
      router: 'Component_Variables',
      icon: 'tune',
      text: 'Variables',
    },
  ];

  constructor() {}

  ngOnInit() {}

  scrollNav(direction: 'left' | 'right') {
    const scrollAmount = 200;
    if (direction === 'left') {
      this.navList.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      this.navList.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }
}
