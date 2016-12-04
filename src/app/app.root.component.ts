import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<com1 #com1></com1><com2 (myEvent)="com1.function1()"></com2>`,
  template : `<inputer (myEvent) = "assets.function1()"></inputer> <assets  #assets></assets>`
})
export class RootComponent {
}
