import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerCompareComponent } from './player-compare.component';

const routes: Routes = [{ path: '', component: PlayerCompareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerCompareRoutingModule { }
