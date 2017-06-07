import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { provideStore, Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { PartyStatsComponent } from './components/party-stats/party-stats.component';
import { FilterSelectComponent } from './components/filter-select/filter-select.component';
import { people } from './shared/people';
import { partyFilter } from './shared/party-filter';
import { reset, RESET_STATE } from './shared/reset';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    PartyStatsComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({people: reset(people), partyFilter})


  ],
  providers: [PersonListComponent, PersonInputComponent, FilterSelectComponent, PartyStatsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
