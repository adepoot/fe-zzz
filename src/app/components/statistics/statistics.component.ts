import {Component, OnInit} from '@angular/core';
import {PlayerStats} from "../../models/playerStats";
import {Observable} from "rxjs";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats$: Observable<PlayerStats[]> | undefined; // Fixme?

  displayedColumns: string[] = ['name', 'selections', 'goals', 'assists', 'saves'];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.stats$ = this.playerService.getAllPlayerStats();
  }

}
