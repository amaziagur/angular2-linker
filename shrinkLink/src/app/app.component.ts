import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { url } from './url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
    public loginForm: FormGroup; 

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      dob: ["", Validators.required]
    });
  }
  
  form: FormGroup;
  public getLink(){
    let appName = "Test";
    return appName;
  }
  
  doSubmit(event) {
    event.preventDefault();
  }


}