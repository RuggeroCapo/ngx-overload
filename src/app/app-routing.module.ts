import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then(m => m.ExampleModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
