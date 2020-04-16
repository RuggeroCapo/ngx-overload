import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExampleComponent} from './example/example.component';
import {ExampleRoutingModule} from './example-routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleRoutingModule],
})
export class ExampleModule {}
