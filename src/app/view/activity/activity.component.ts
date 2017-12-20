import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpServerService } from '../../http-server.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [HttpServerService]
})

export class ActivityComponent implements OnInit {
  eventDetail: object

  constructor(
    private httpServer: HttpServerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.httpServer.getActivity(params.id).then(res => {
        this.eventDetail = res
      })
    })
  }
}

@Pipe({
  name: 'toArray'
})
export class toArrayPipe implements PipeTransform {
  transform(value: string): Array<string> {
    return value.split(',')
  }
}