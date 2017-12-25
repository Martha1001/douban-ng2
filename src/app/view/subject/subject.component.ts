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
  meta: string;

  constructor(
    private httpServer: HttpServerService,
    private route: ActivatedRoute
  ) { }

  getMeta(type) {
    switch (type) {
      case 'movie':
        if (this.subject['attrs']) {
          this.meta = this.subject['attrs'].movie_duration[0] + ' / ' +
            this.subject['attrs'].movie_type.join(' / ') + ' / ' +
            this.subject['attrs'].director[0].match(/[^a-zA-Z 0-9]/g).join('') + '(导演) / ' +
            this.subject['attrs'].cast.slice(0, 3).map(x => {
              return x.match(/[^a-zA-Z 0-9]/g).join('')
            }).join(' / ') + ' / ' +
            this.subject['attrs'].pubdate.map(x => {
              if(x.match('大陆')){
                return x
              }
            }).join('')
        } else {
          console.log(this.subject['genres'])
          this.meta = this.subject['genres'].join(' / ')

        }


    }



  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.httpServer.getMovie(params.id).then(res => {
        this.subject = res;
        this.getMeta(params.classify)
      })
    });
  };

};