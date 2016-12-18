import {Injectable, EventEmitter} from "@angular/core";
import {LoggedEvent} from "./LoggedEvent";

@Injectable()
export class EventService {

  private loggedEvent: LoggedEvent;
  public eventChaned = new EventEmitter<LoggedEvent>();

  setLogged(logged: LoggedEvent): void {
    this.loggedEvent = logged;
    this.eventChaned.emit(this.loggedEvent);
    console.log(this.loggedEvent.event)
  }

  getLogged() {
    return this.eventChaned;
  }
}
