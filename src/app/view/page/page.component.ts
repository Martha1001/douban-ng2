import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  isDialog: boolean = false
  changeDialog($event) {
    this.isDialog = $event
  }
  constructor() { }

  ngOnInit() {
  }

}
