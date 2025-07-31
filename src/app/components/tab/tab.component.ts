import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  themeClr: string = '';
  tabContent: any = [
    {
      tabTitle: 'Welcome to Tabs!',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
    {
      tabTitle: 'Company',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
    {
      tabTitle: 'Service',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
