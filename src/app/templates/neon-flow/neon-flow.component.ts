import { Component } from '@angular/core';

@Component({
  selector: 'app-neon-flow',
  templateUrl: './neon-flow.component.html',
  styleUrl: './neon-flow.component.scss',
})
export class NeonFlowComponent {
  allNavMenus: any = {
    Basics: [
      {
        title: 'Basics',
        menus: [
          { icon: 'sticky_note_2', text: 'Intro' },
          { icon: 'chat', text: 'Comments' },
          { icon: 'database', text: 'Variables' },
          { icon: 'functions', text: 'Operators' },
          { icon: 'link', text: 'Template Literals' },
          { icon: 'shuffle', text: 'Conv & Coerc' },
          { icon: 'fork_right', text: 'Truthy & Falsy' },
          { icon: 'lan', text: 'Boolean' },
          { icon: 'receipt_long', text: 'Stmt & Expr' },
          { icon: 'view_array', text: 'Array' },
          { icon: 'web', text: 'Prompt' },
          { icon: 'spellcheck', text: 'If else' },
          { icon: 'checklist', text: 'Switch case' },
          { icon: 'developer_mode', text: 'Function' },
          { icon: 'data_object', text: 'Object' },
          { icon: 'repeat', text: 'Loop' },
          { icon: 'target', text: 'Project' },
        ],
      },
    ],
    Advance: [
      {
        title: 'Advance',
        menus: [
          { icon: 'sticky_note_2', text: 'Intro' },
        ],
      },
    ],
  };

  appContentData: any = {
    Basics: {
      title: 'JavaScript Fundamentals Zone',
      description: [
        'Master the core building blocks of JavaScript — from variables to functions and control structures.',
        'Perfect for beginners or those refreshing their JS foundations.',
      ],
    },
    Advance: {
      title: 'Advanced JavaScript Topics',
      description: [
        'Explore deeper concepts like closures, promises, async/await, and advanced object handling.',
        'This area equips you for real-world application complexity.',
      ],
    },
  };

  menuContentMap: any = {
    // Basics
    Intro: `An introduction to JavaScript — what it is, where it runs, and why it powers most of the modern web.`,
    Comments: `Learn how to write meaningful comments and document your code effectively.`,
    Variables: `Understand var, let, and const — their scope, hoisting behavior, and best practices.`,
    Operators: `Explore arithmetic, logical, comparison, and assignment operators in JavaScript.`,
    'Template Literals': `Use backtick syntax to embed variables in strings and write cleaner multi-line templates.`,
    'Conv & Coerc': `Understand how type conversion and coercion work behind the scenes.`,
    'Truthy & Falsy': `Identify values considered "truthy" or "falsy" and how they affect conditionals.`,
    Boolean: `Learn how boolean logic is used in flow control and logical expressions.`,
    'Stmt & Expr': `Differentiate between statements and expressions — crucial for understanding control flow.`,
    Array: `Understand array methods like map, filter, reduce, and best ways to manipulate lists.`,
    Prompt: `Use the prompt method to receive user input directly from the browser.`,
    'If else': `Learn conditional branching using if, else if, and else blocks.`,
    'Switch case': `Handle multiple condition checks using the switch-case syntax.`,
    Function: `Define reusable logic using function declarations, expressions, and arrow functions.`,
    Object: `Understand objects as collections of properties and methods — the heart of JS.`,
    Loop: `Master for, while, do-while, and forEach for iteration.`,
    Project: `A mini project to tie together all basic concepts into a working program.`,
  };

  // Default section and menu
  selectedSection = 'Basics';
  selectedMenu: any = this.allNavMenus[this.selectedSection][0].menus[0];
  selectedMenuTitle: any = '';
  selectedMenuContent: string = '';

  get navMenusProp() {
    return this.allNavMenus[this.selectedSection];
  }

  onSectionClick(section: string) {
    this.selectedSection = section;
    this.selectedMenu = this.allNavMenus[section][0].menus[0];
    this.onMenuClick(this.selectedMenu); // Auto select first menu on section change
  }

  onMenuClick(menu: any) {
    this.selectedMenu = menu.text;
    this.selectedMenuTitle = menu.text;
    this.selectedMenuContent =
      this.menuContentMap[menu.text] || 'Content coming soon...';
  }
}