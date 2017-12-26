import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class HttpServerService {
  private subjectUrl: string

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getActivityList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4200/v2/event/list?loc=108296&start=0&count=1')
        .toPromise()
        .then(res => {
          if (res.status === 200) {
            resolve(res.json())
          }
        })
        .catch(this.handleError)
    })
  }

  getSubjectList(tag): Promise<any> {
    console.log(tag)
    switch (tag) {
      case 'hotMovie':
        this.subjectUrl = 'http://localhost:4200/v2/movie/in_theaters?city=上海&count=1'
        break
      case 'topMovie':
        this.subjectUrl = 'http://localhost:4200/v2/movie/top250?count=1'
        break
      case 'newMovie':
        this.subjectUrl = 'http://localhost:4200/v2/movie/coming_soon?count=1'
        break
      case 'imaginaryBook':
        this.subjectUrl = 'http://localhost:4200/v2/book/search?q=虚构类&count=1'
        break
      case 'unimaginaryBook':
        this.subjectUrl = 'http://localhost:4200/v2/book/search?q=非虚构类&count=1'
        break
      default:
        this.subjectUrl = 'http://localhost:4200/v2/movie/in_theaters?city=上海&count=1'
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.subjectUrl)
        .toPromise()
        .then(res => {
          if (res.status === 200) {
            resolve(res.json())
          }
        })
        .catch(this.handleError)
    })
  }

  getSubject(classify, id): Promise<any> {
    switch (classify) {
      case 'activity':
        classify = 'event'
        break
      case 'movie':
        classify = 'movie'
        break
      case 'book':
        classify = 'book'
        break
    }
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4200/v2/' + classify + '/' + id)
        .toPromise()
        .then(res => {
          if (res.status === 200) {
            resolve(res.json())
          }
        })
        .catch(this.handleError)
    })
  }

}
