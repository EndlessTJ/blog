import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Post } from '../class/post';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor (
    private http: HttpClient
  ) {}


  public post(url: string, params?: object , options?: object): Observable<Post> {
    if (!options) {
      options = httpOptions
    }
    return this.http.post<Post>(url, params, options).pipe(
      tap(post => console.log('post请求返回内容',post))
    )
  }
  public get(url: string): Observable<Post> {
    return this.http.get<Post>(url).pipe(
      tap(post => console.log('get请求返回内容',post))
    )
  }

}

