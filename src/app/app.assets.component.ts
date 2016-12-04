import { Component, OnInit } from '@angular/core';
import {UrlAsset} from './UrlAsset'
import {AssetsService} from './assets.service'

@Component({
    selector: 'assets',
    templateUrl: './app.assets.html',
    providers : [AssetsService]
})
export class AssetsComponent implements OnInit {
  urls : UrlAsset[];
  // subscription: any;
  constructor (private assetService : AssetsService){
      this.assetService = assetService
    // this.subscription = this.assetService.pushNewAsset(any)
    //   .subscribe(this.assetService.getAssets().subscribe(
    //     data => this.urls = data
    //   ));
  }

  ngOnInit() : void {
      console.debug("yay!")
      this.assetService.getAssets().subscribe(
            data => this.urls = data
        )
  }

  function1(){
    console.log("new asset!!!!!");
    console.log(this.urls)
    console.log(this.assetService.getAssets().subscribe(data => this.urls = data))
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
