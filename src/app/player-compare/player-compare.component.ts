import { Component, OnInit } from '@angular/core';
import { PlayerSearchService } from '../services/player-search.service';

@Component({
  selector: 'app-player-compare',
  templateUrl: './player-compare.component.html',
  styleUrls: ['./player-compare.component.scss']
})
export class PlayerCompareComponent implements OnInit {

  constructor(protected playerSearchService: PlayerSearchService) { }

  currentPlayer: any; 
  allPlayers: any;
  ngOnInit(): void {
    this.playerSearchService.searchPlayer(0,"237").subscribe(player => {
      this.currentPlayer = player;
    });
    this.playerSearchService.getAllPlayers().subscribe(players => {
      this.allPlayers = players.data;
      console.log(this.allPlayers);
    });
  }

}
