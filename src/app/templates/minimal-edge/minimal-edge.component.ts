import { Component } from '@angular/core';

@Component({
  selector: 'app-minimal-edge',
  templateUrl: './minimal-edge.component.html',
  styleUrl: './minimal-edge.component.scss',
  standalone: false,
})
export class MinimalEdgeComponent {
  allNavMenus: any = {
    'Getting Started': [
      {
        title: 'Getting Started',
        menus: [
          { icon: 'rocket_launch', text: 'Overview' },
          { icon: 'fact_check', text: 'User Onboarding' },
          { icon: 'assignment', text: 'Company Guidelines' },
          { icon: 'feed', text: 'Release Notes' },
        ],
      },
    ],
    Documentation: [
      {
        title: 'Documentation',
        menus: [
          { icon: 'code', text: 'API Reference' },
          { icon: 'extension', text: 'Integrations' },
          { icon: 'handyman', text: 'Developer Tools' },
          { icon: 'palette', text: 'Design System' },
        ],
      },
    ],
    Processes: [
      {
        title: 'Processes',
        menus: [
          { icon: 'receipt_long', text: 'Product SOPs' },
          { icon: 'rule', text: 'QA Checklists' },
          { icon: 'verified_user', text: 'Security Standards' },
        ],
      },
    ],
    Support: [
      {
        title: 'Support',
        menus: [
          { icon: 'forum', text: 'FAQs' },
          { icon: 'bug_report', text: 'Report an Issue' },
          { icon: 'help_center', text: 'Contact Support' },
        ],
      },
    ],
  };

  appContentData: any = {
    'Getting Started': {
      title: 'Welcome to the Knowledge Base',
      description: [
        'Start here to explore how our platform works, onboarding steps for new users, and our company’s core usage guidelines.',
        'You’ll find everything from platform tours to quick-start checklists to help your team hit the ground running.',
      ],
    },
    Documentation: {
      title: 'Product Documentation Hub',
      description: [
        'Dive deep into our API references, integration guides, and developer resources.',
        'Everything you need to understand how to extend, embed, or customize the platform lives here.',
      ],
    },
    Processes: {
      title: 'Internal Workflows and SOPs',
      description: [
        'Access our standard operating procedures (SOPs), product development lifecycle, and QA checklists.',
        'This section ensures consistency, quality, and security in every project we build.',
      ],
    },
    Support: {
      title: 'Help & Support Center',
      description: [
        'Find frequently asked questions, troubleshooting steps, and direct support contacts.',
        'Whether you have a bug to report or need product guidance, we’re here to help.',
      ],
    },
  };

  menuContentMap: any = {
    // Getting Started
    Overview: `Welcome to the platform! Get an overview of the purpose, benefits, and how to navigate through the system effectively.`,
    'User Onboarding': `A step-by-step guide to help new users get started quickly. Covers account creation, setup, and best practices.`,
    'Company Guidelines': `Internal company policies, usage norms, and standard operating procedures that all users must adhere to.`,
    'Release Notes': `Track the history of product updates, feature additions, bug fixes, and technical improvements.`,

    // Documentation
    'API Reference': `The API Reference contains comprehensive details of each endpoint, parameter, and expected responses. Use this to integrate confidently with our system.`,
    Integrations: `Explore how to connect third-party services, automate workflows, and sync data across platforms using available integration hooks.`,
    'Developer Tools': `Developer Tools include CLI utilities, browser extensions, and SDKs to boost your development productivity.`,
    'Design System': `The Design System defines UI components, branding guidelines, and accessibility standards for consistent user experience.`,

    // Processes
    'Product SOPs': `Documented workflows that outline how various business and product-related processes are executed within the organization.`,
    'QA Checklists': `A detailed list of quality assurance checks to follow before releasing any feature, ensuring consistency and stability.`,
    'Security Standards': `Guidelines and compliance protocols to help keep the application secure and meet industry standards.`,

    // Support
    FAQs: `Frequently Asked Questions that address common user concerns and clarify platform behavior.`,
    'Report an Issue': `Found a bug or issue? Learn how to report it effectively so our team can resolve it faster.`,
    'Contact Support': `Reach out to our support team for personalized help with your account, features, or technical challenges.`,
  };

  // Default active section
  selectedSection = 'Getting Started';

  selectedMenu: any = this.allNavMenus[this.selectedSection][0].menus[0];
  selectedMenuTitle: any = '';
  selectedMenuContent: string = '';

  // This gets rendered in the nav
  get navMenusProp() {
    return this.allNavMenus[this.selectedSection];
  }

  // Handle click
  onSectionClick(section: string) {
    this.selectedSection = section;
  }

  onMenuClick(menu: any) {
    this.selectedMenu = menu.text;
    this.selectedMenuTitle = menu.text;
    this.selectedMenuContent =
      this.menuContentMap[menu.text] || 'Content coming soon...';
  }
}
