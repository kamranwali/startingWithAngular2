import { Injectable } from '@angular/core';
import { IEvent } from './event';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class EventService {

  private _eventUrl = 'http://localhost:4200/data.json';

  constructor(private _http: Http) {}

  getEvents(): Observable<IEvent[]> {
    return this._http.get('assets/events.json')
    .map((response: Response) => <IEvent[]>response.json())
    .do((data) => console.log('All: ' + JSON.stringify(data)))
    .catch( this.handleError);
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
