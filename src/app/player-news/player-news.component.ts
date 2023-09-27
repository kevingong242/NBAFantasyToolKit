import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-news',
  templateUrl: './player-news.component.html',
  styleUrls: ['./player-news.component.scss']
})
export class PlayerNewsComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._Activatedroute.snapshot.paramMap.get("id"));
  }

}
