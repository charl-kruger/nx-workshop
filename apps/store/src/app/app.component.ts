import { Component } from '@angular/core';
import {getAllGames} from "../fake-api";
import { formatRating } from '@bg-hoard/store/util-formatters';
import {HttpClient} from "@angular/common/http";
import {Game} from "@bg-hoard/util-interface";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  formatRating = formatRating;
  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games');
}
