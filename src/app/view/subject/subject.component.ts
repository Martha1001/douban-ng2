import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../http-server.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers: [HttpServerService]
})

export class SubjectComponent implements OnInit {
  subject: object;
  type: string;
  meta: string

  constructor(
    private httpServer: HttpServerService,
    private route: ActivatedRoute,
  ) { };

  getMeta(type) {
    switch (type) {
      case 'movie':
        this.meta = this.subject['attrs'].year + ' / ' +
          this.subject['attrs'].movie_type.join(' / ') + ' / ' +
          this.subject['attrs'].director.map(idx => idx.name).join('(导演) / ') + ' (导演) / ' +
          this.subject['attrs'].cast.map(idx => idx.name).join('(主演) / ') + ' (主演) / ' +
          this.subject['attrs'].country.join(' / ')

    }
  };

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.httpServer.getMovie(params.id).then(res => {
        console.log(params)
        this.subject = res;
      });
      this.getMeta(params.classify)
    });
  };
}
