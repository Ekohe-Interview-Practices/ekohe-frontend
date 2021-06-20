import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows.component';
import { DataModule } from '../../data/data.module';


@NgModule({
  declarations: [
    TvShowsComponent
  ],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    DataModule
  ]
})
export class TvShowsModule { }
