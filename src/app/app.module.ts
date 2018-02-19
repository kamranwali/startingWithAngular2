import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {EventListComponent} from './events/event-list.component';
import {EventFilterPipe} from './events/event-filter.pipe';
import {ThumbComponent} from './shared/thumb.component';
import {EventService} from './events/event.service';
import {WelcomeComponent} from './home/welcome.component';
import { EventDetailComponent } from './events/event-detail.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'events', component: EventListComponent},
  {path: 'event/:id', component: EventDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent, EventListComponent,
    EventFilterPipe, ThumbComponent,
    WelcomeComponent, EventDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
