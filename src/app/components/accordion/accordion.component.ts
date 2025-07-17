import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  selectedClr: string = 'green';
  accContent: { class: string; title: string; content: string }[] = [
    {
      class: '',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: '',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
  ];
  accContentXl: { class: string; title: string; content: string }[] = [
    {
      class: 'yellow',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'green',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'orange',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'blue',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'violet',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'gray',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  selectClr(param: string) {
    this.selectedClr = param;
  }
}
