import { Component } from '@angular/core';
import { Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent {
  /*
    "dumb" components do nothing but display data based on input and
    emit relevant events back up for parent, or "container" components to handle
  */
  @Input() people;
  @Output() addGuest = new EventEmitter();
  @Output() removeGuest = new EventEmitter();
  @Output() removePerson = new EventEmitter();
  @Output() toggleAttending = new EventEmitter();
}
