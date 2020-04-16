import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadOnOverDirective} from './directive/preload-on-over.directive';

@NgModule({
  declarations: [PreloadOnOverDirective],
  imports: [CommonModule],
  exports: [PreloadOnOverDirective],
})
export class OverloadStrategyModule {}
