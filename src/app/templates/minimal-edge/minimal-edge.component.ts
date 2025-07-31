import { Component } from '@angular/core';

@Component({
  selector: 'app-minimal-edge',
  templateUrl: './minimal-edge.component.html',
  styleUrl: './minimal-edge.component.scss',
})
export class MinimalEdgeComponent {
  navMenusProp: any = [
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
    {
      title: 'Advance',
      menus: [{ icon: 'sticky_note_2', text: 'Intro' }],
    },
  ];
}
