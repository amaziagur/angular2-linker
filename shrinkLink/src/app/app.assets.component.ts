import { Component, OnInit } from '@angular/core';
import {UrlAsset} from './UrlAsset'
import {AssetsService} from './assets.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.assets.html',
    providers : [AssetsService]
})
export class UrlComponent implements OnInit {
  urls : UrlAsset[];

  constructor (private assetService : AssetsService){
      this.assetService = assetService
  }


  ngOnInit() : void {
      console.debug("yay!")
      this.assetService.getAssets().subscribe(
            data => this.urls = data
        )
  }

}