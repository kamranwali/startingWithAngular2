import {Component, OnInit} from '@angular/core';
import {IEvent} from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-el-events',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  errorMessage: any;
  private pageTitle = 'Event List - current';
  imageWidth = 50;
  imageMargin: 2;
  showImage = false;
  searchCriteria = '';

  private events: IEvent[];

  constructor(private _eventService: EventService) {

  }

  ngOnInit(): void {
    this._eventService.getEvents()
    .subscribe(events => this.events = events,
    error => this.errorMessage = <any>error );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Event list: ' + message;
  }
}
