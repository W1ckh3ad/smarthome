import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHideDirective } from './directives/scroll-hide.directive';

@NgModule({
  declarations: [ScrollHideDirective],
  exports: [ScrollHideDirective],
  imports: [CommonModule],
})
export class SharedModule {}
