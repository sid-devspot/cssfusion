import { NgModule } from '@angular/core';
import { CssFusionComponent } from './css-fusion.component';
import { AccordionDirective } from './directives/accordion.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { NavDirective } from './directives/nav.directive';
import { TableDirective } from './directives/table.directive';
import { TabsDirective } from './directives/tab.directive';
import { TypewriterDirective } from './directives/typewriter.directive';

@NgModule({
  declarations: [
    CssFusionComponent,
    AccordionDirective,
    DropdownDirective,
    NavDirective,
    TableDirective,
    TabsDirective,
    TypewriterDirective,
  ],
  imports: [],
  exports: [
    CssFusionComponent,
    AccordionDirective,
    DropdownDirective,
    NavDirective,
    TableDirective,
    TabsDirective,
    TypewriterDirective,
  ],
})
export class CssFusionModule {}
