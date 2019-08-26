import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import appConfig from '../../app-config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }
  getMovieListing(pageNumber, pageSize) {
    const moviesParams = new HttpParams()
    .set('region', 'ID')
    .set('page', pageNumber.toString())
    .set('perPage', pageSize.toString());

    let url = appConfig.movie_url_base + '/discover/feed';
    return this.http.get<any>(url, { params: moviesParams })
      .pipe(map(resp => {
        return resp;
      }))
  }
  getMovieDetails(movieId){
    let url = appConfig.movie_url_base + `/discover/titles/${movieId}`;
    return this.http.get<any>(url)
      .pipe(map(resp => {
        return resp;
      }))
  }
}
