import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import index from "@angular/cli/lib/cli";

interface IRatingUnit {
  value: number;
  active: boolean;
}

@Component({
  selector: 'app-raiting-bar',
  templateUrl: './raiting-bar.component.html',
  styleUrls: ['./raiting-bar.component.css']
})
export class RaitingBarComponent implements OnInit {
  @Input() max;
  @Input() ratingValue = 2;
  // @Input() showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();
  ratingUnits: Array<IRatingUnit> = [];

  constructor() { }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(){
    this.ratingValue ++;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index){
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset(){
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
