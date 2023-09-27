import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerNewsComponent } from './player-news.component';

const routes: Routes = [{ path: '', component: PlayerNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerNewsRoutingModule { }
