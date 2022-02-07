import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/devices',
  },
  {
    path: 'devices',
    loadChildren: () =>
      import('./features/devices/devices.module').then(
        (m) => m.DevicesPageModule
      ),
  },
  {
    path: 'start',
    loadChildren: () => import('./features/start/start.module').then( m => m.StartPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
