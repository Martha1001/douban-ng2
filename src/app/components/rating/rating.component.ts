import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() ratings: any
  full: Array<number>=[]
  gray: Array<number>=[]

  setRating() {
    this.full.length = Math.round(this.ratings.average / 2)
    this.gray.length = 5 - this.full.length
  }

  constructor() { }

  ngOnInit() {
    this.setRating()
  }

}
