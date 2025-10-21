import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MotionRoutingModule } from './motion-routing.module';

// Library

// Components
import { MotionComponent } from './motion.component';
import { MotionCodeComponent } from './components/motion-code/motion-code.component';


@NgModule({
  declarations: [MotionComponent, MotionCodeComponent],
  imports: [CommonModule, RouterModule, MotionRoutingModule],
})
export class MotionModule {}
