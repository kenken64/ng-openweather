import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OpenweatherServiceService {

  constructor(private http: HttpClient) { }
  
  getWeather(city): Observable<any>{
    console.log("getWeather>");
    return this.http.get(`${environment.openweather_url}${city}&APPID=${environment.openweather_api_key}`);
  }
}
