import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})

export class ThumbComponent implements OnChanges {
  @Input() rating: number;
  thumbswidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.thumbswidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
  }
}
