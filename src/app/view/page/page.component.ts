import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  isDialog: boolean = false
  dialogStatus(status): any {
    this.isDialog = status
  }

  constructor() { }

  ngOnInit() {
  }

}
