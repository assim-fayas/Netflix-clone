import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

baseurl="https://api.themoviedb.org/3"
apikey="7cc38a599b4f987cb16f7382c8f22b8e"


//bannerapidata

bannerApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}

// trendingmovieapiedata

trendingMovieApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
}

}
