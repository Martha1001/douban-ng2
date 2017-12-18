import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() closeDialog: boolean = false
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>()
  closeIt(): any {
    this.closeDialog = false
    this.change.emit(this.closeDialog)
  }

  constructor() { }

  ngOnInit() { }

}
