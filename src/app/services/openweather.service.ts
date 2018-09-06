import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  constructor(private http: HttpClient) { }
  svcResponse: any;


  getWeatherFromSvc(){
    return this.svcResponse;
  }

  getWeather(city): Observable<any>{
    console.log("getWeather>");
    return this.http
      .get(`${environment.openweather_url}${city}&APPID=${environment.openweather_api_key}`)
      .pipe(
        map(response => {
          this.svcResponse = response;
          return response
        }),
        catchError(this.handleError('getWeather', []))
      );;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
