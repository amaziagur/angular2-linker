import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UrlInputComponent } from './url.input.component';
import {AssetsComponent} from './app.assets.component';


@NgModule({
  declarations: [
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
  bootstrap: ([UrlInputComponent, AssetsComponent])
})
export class AppModule { }
