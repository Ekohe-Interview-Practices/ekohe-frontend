import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    InfosComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    InfosRoutingModule
  ]
})
export class InfosModule { }
