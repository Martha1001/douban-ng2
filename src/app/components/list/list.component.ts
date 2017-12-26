import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../http-server.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [HttpServerService]
})

export class ListComponent implements OnInit {
  activity: string

  constructor(private httpServer: HttpServerService) { }

  ngOnInit() {
    this.httpServer.getActivityList().then(res => {
      this.activity = res.events
    })
  }
  
}


