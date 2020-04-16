import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleComponent} from './example/example.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
