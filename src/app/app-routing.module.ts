import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'player-news/:id', loadChildren: () => import('./player-news/player-news.module').then(m => m.PlayerNewsModule) }, { path: 'player-compare', loadChildren: () => import('./player-compare/player-compare.module').then(m => m.PlayerCompareModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
