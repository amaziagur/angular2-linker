import { Component, OnInit } from '@angular/core';
import {UrlAsset} from './UrlAsset'
import {AssetsService} from './assets.service'
import {EventService} from "./eventService";
import {LoggedEvent} from "./LoggedEvent";

@Component({
    selector: 'assets',
    templateUrl: './app.assets.html',
    styleUrls: ['./app.assets.component.css'],
    providers : [AssetsService, EventService]
})
export class AssetsComponent implements OnInit {
  urls : UrlAsset[];
  subscription: any;
  private logged: LoggedEvent;

  constructor (private assetService : AssetsService, private eventService : EventService){

  }

  ngOnInit() : void {
    this.subscription = this.eventService.getLogged().subscribe(logged => {
      console.info('Receiving logged user Component B');
      this.logged = logged;
    });
      console.debug("yay!")
      this.assetService.getAssets().subscribe(
            data => this.urls = data
        )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  function1(){
    console.log("new asset!!!!!");
    console.log(this.urls)
    console.log(this.assetService.getAssets().subscribe(data => this.urls = data))
  }


}
