import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UrlInputComponent } from './url.input.component';
import {AssetsComponent} from './app.assets.component';
import {RootComponent} from "./app.root.component";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {MapComponent} from "./app.map.component";

@NgModule({
  declarations: [
    RootComponent,
    UrlInputComponent,
    AssetsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApIiv9Vh_sEYib8ziEGH_y1ttz88_MK_Q'
    })
  ],
  providers: [],
  bootstrap: ([RootComponent])
})
export class AppModule { }
