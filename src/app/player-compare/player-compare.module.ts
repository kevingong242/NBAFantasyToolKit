import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerCompareRoutingModule } from './player-compare-routing.module';
import { PlayerCompareComponent } from './player-compare.component';


@NgModule({
  declarations: [PlayerCompareComponent],
  imports: [
    CommonModule,
    PlayerCompareRoutingModule
  ]
})
export class PlayerCompareModule { }
