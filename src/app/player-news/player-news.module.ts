import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerNewsRoutingModule } from './player-news-routing.module';
import { PlayerNewsComponent } from './player-news.component';


@NgModule({
  declarations: [PlayerNewsComponent],
  imports: [
    CommonModule,
    PlayerNewsRoutingModule
  ]
})
export class PlayerNewsModule { }
