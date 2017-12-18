import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input() openDialog: boolean = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>()
  openIt(): any {
    this.openDialog = true
    this.change.emit(this.openDialog)
  }

  constructor() { }

  ngOnInit() { }

}
