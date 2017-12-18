import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
    this.httpServer.getActivity().then(res => {
      this.activity = res.events
    })
  }

}

@Pipe({
  name: 'subStr'
})
export class subStrPipe implements PipeTransform {
  transform(value: string): string {
    let newVal = value.replace(/<.*?>/g,'')
    return newVal.slice(0,35).concat('...')
  }
}
