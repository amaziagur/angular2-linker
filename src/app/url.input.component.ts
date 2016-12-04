import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {AssetsService} from './assets.service'

import { url } from './url';

@Component({
  selector: 'inputer',
  templateUrl: './url.input.component.html',
  providers : [AssetsService]
})
export class UrlInputComponent{
    public cutLinkForm: FormGroup;

  @Output() myEvent = new EventEmitter();

  constructor(fb: FormBuilder, private assetService : AssetsService) {
    this.assetService = assetService;
    this.cutLinkForm = fb.group({
      dob: ["", Validators.required]
    });
  }

  clicked(url: HTMLInputElement) {
    this.myEvent.emit(url.value)
    this.assetService.pushNewAsset(url.value)
    console.log(url);
    url.value = null
  }
}
