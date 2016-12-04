import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<com1 #com1></com1><com2 (myEvent)="com1.function1()"></com2>`,
  template : `<url-input></url-input>
              <assets></assets>`
})
export class RootComponent {
}
