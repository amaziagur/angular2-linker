import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UrlInputComponent } from './url.input.component';
import {AssetsComponent} from './app.assets.component';
import {RootComponent} from "./app.root.component";


@NgModule({
  declarations: [
    RootComponent,
    UrlInputComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: ([RootComponent])
})
export class AppModule { }
