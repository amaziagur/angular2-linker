import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AssetsService} from "./assets.service";
import {EventService} from "./eventService";

@Component({
  selector: 'inputer',
  templateUrl: './url.input.component.html',
  styles: [`
    form {
        float:right;
        clear:both;
    }
  `],
  providers : [AssetsService, EventService]
})
export class UrlInputComponent{
    public cutLinkForm: FormGroup;

  constructor(fb: FormBuilder, private assetService : AssetsService, private eventService : EventService) {
    this.cutLinkForm = fb.group({
      dob: ["", Validators.required]
    });
  }

  clicked(url: HTMLInputElement) {
    this.eventService.setLogged({ event: url.value })
    this.assetService.pushNewAsset(url.value)
    url.value = null
  }
}
