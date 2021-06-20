import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TvmazeService } from 'src/app/data/services/tvmaze.service';
import { Show } from 'src/app/data/types/tvmaze-results';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  loading = true;
  term = 'Batman';
  shows: Show[] = [];

  constructor(private showsSvc: TvmazeService) {}

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch(): void {
    this.showsSvc
      .searchShows(this.term)
      .pipe(
        tap((items) => (this.shows = items.map((item) => item.show))),
        tap(() => (this.loading = false))
      )
      .subscribe();
  }
}
