import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MotionRoutingModule } from './motion-routing.module';

// Library
import { CssFusionModule } from './../../../projects/css-fusion/src/lib/css-fusion.module';

// Components
import { MotionComponent } from './motion.component';
import { MotionCodeComponent } from './components/motion-code/motion-code.component';


@NgModule({
  declarations: [MotionComponent, MotionCodeComponent],
  imports: [CommonModule, RouterModule, CssFusionModule, MotionRoutingModule],
})
export class MotionModule {}
