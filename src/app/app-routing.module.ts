import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverloadStrategyService} from '../../projects/libs/src/lib/overload-strategy/strategy/overload-strategy.service';

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
      preloadingStrategy: OverloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
