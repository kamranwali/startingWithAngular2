import { PipeTransform, Pipe } from '@angular/core';
import {IEvent} from './event';

@Pipe({
  name: 'EventFilter'
})
export class EventFilterPipe implements PipeTransform {
  transform(value: IEvent[], ...args: any[]): IEvent[] {
    const filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((event: IEvent) => event.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }
}
