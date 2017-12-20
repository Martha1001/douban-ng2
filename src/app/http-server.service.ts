import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class HttpServerService {

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getActivityList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../assets/activity.json')
        .toPromise()
        .then(res => {
          resolve(res.json())
        })
        .catch(this.handleError)
    })
  }
  getActivity(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../assets/' + id + '.json')
        .toPromise()
        .then(res => {
          resolve(res.json())
        })
        .catch(this.handleError)
    })
  }

  private movieUrl: string
  getMovieList(tag): Promise<any> {
    switch (tag) {
      case 'hotMovie':
        this.movieUrl = '../assets/hotMovie.json'
        break
      case 'topMovie':
        this.movieUrl = '../assets/topMovie.json'
        break
      case 'newMovie':
        this.movieUrl = '../assets/newMovie.json'
        break
      default:
        this.movieUrl = '../assets/hotMovie.json'
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.movieUrl)
        .toPromise()
        .then(res => {
          resolve(res.json())
        })
        .catch(this.handleError)
    })
  }
  getMovie(id):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get('../assets/' + id + '.json')
      .toPromise()
      .then(res=>{
        console.log(id)
        resolve(res.json())
      })
      .catch(this.handleError)
    })
  }



}
