import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../http-server.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [HttpServerService]
})
export class ActivityComponent implements OnInit {
  eventDetail: any

  constructor(private httpServer: HttpServerService) { }

  ngOnInit() {
    this.httpServer.getActivity().then(res => {
      this.eventDetail = res
    })
  }

}
