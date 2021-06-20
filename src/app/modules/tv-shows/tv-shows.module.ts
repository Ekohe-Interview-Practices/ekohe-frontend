import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows.component';
import { DataModule } from '../../data/data.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [TvShowsComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    DataModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class TvShowsModule {}
