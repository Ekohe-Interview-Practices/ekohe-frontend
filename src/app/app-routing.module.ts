import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'info', // Informations pages plus generic informative like 404 text
    loadChildren: () =>
      import('./modules/infos/infos.module').then((m) => m.InfosModule),
  },
  {
    path: 'main', // TV Shows info
    loadChildren: () =>
      import('./modules/tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
  // Generic routes...
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./modules/tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  }, // Default page
  { path: '**', redirectTo: '/info/404' }, // Any path not designed to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
