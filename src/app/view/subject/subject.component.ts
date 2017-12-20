import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../http-server.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers: [HttpServerService]
})
export class SubjectComponent implements OnInit {
  subject:object

  constructor(
    private httpServer: HttpServerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.httpServer.getMovie(params.id).then(res=>{
        this.subject = res
        console.log(this.subject)
      })
    })
  }

}
