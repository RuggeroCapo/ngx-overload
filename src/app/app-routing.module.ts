import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverloadStrategy} from '../../projects/ngx-overload/src/lib/overload-strategy/strategy/overload-strategy.service';

const appRoutes: Routes = [
  {
    path: 'example',
    loadChildren: () =>
      import('./example/example.module').then(m => m.ExampleModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      preloadingStrategy: OverloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
