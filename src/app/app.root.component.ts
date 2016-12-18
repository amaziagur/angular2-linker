import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<inputer (myEvent) = "assets.function1()"></inputer> <assets  #assets></assets><app-map></app-map>`
})
export class RootComponent {
}
