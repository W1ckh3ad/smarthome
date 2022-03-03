import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/start/start.module').then((m) => m.StartPageModule),
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
    loadChildren: () =>
      import('./features/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'regeln',
    loadChildren: () => import('./features/regeln/regeln.module').then( m => m.RegelnPageModule)
  },
  {
    path: 'presets',
    loadChildren: () => import('./features/presets/presets.module').then( m => m.PresetsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
