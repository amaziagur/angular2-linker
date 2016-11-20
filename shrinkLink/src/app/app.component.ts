import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {AssetsService} from './assets.service'

import { url } from './url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AssetsService]
})
export class AppComponent{ 
    public loginForm: FormGroup; 

  constructor(fb: FormBuilder, private assetService : AssetsService) {
    this.assetService = assetService;
    this.loginForm = fb.group({
      dob: ["", Validators.required]
    });
  }
  
  form: FormGroup;
  public getLink(){
    let appName = "Test";
    return appName;
  }
  

  clicked(url: HTMLInputElement) {
    this.assetService.pushNewAsset(url.value)
    console.log(url);
    url.value = null
  }


}