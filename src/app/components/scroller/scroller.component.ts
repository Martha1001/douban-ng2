import { Component, OnInit, Input } from '@angular/core';
import { HttpServerService } from '../../http-server.service'

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
  providers: [HttpServerService]
})
export class ScrollerComponent implements OnInit {
  @Input() tag
  movies: string

  constructor(private httpServer: HttpServerService) { }

  ngOnInit() {
    this.httpServer.getMovie(this.tag).then(res => {
      this.movies = res.subjects
    })
  }

}
