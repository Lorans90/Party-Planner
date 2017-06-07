import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ADD_PERSON, REMOVE_PERSON, ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING } from './shared/actions';
import { provideStore, Store } from '@ngrx/store';
import { id } from './shared/id';
import { partyModel, percentAttending } from './shared/selectors';
import { RESET_STATE } from './shared/reset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // changeDetetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  public model;
  percentAttendance;
  constructor(
    private _store: Store<any>
  ) {
    /*
      Every time people or partyFilter emits, pass the latest
      value from each into supplied function. We can then calculate
      and output statistics.
    */
    this.model = Observable.combineLatest(
      _store.select('people'),
      _store.select('partyFilter')
    )
      // extracting party model to selector
      .let(partyModel());
    // for demonstration on combining selectors
    this.percentAttendance = _store.let(percentAttending());
  }
  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name) {
    this._store.dispatch({ type: ADD_PERSON, payload: { id: id(), name } });
  }

  addGuest(id) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id });
  }

  updateFilter(filter) {
    this._store.dispatch({ type: filter });
  }

  resetParty() {
    this._store.dispatch({ type: RESET_STATE });
  }
}
