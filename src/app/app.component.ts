import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { OpenweatherService } from './services/openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*
  (F-32)*5/9 = Celcius
  */
  title = 'ng-openweather';
  result = {
    temp: 0,
    humidity: 0,
    pressure: 0,
  };
  desc = '';
  cloneResult: any;
  searchForm  = new FormGroup(
    {
      city: new FormControl(''),
    }
  );
  constructor(private openWeatherSvc: OpenweatherService) {}

  ngOnInit(){
    const cityField = this.searchForm.get('city');
    let debounce = cityField.valueChanges.pipe(
      debounceTime(1000), // delay 1000 msec
      distinctUntilChanged() // only for changed value
    );

    debounce.subscribe(changes => {
      console.log(changes);
      this.openWeatherSvc.getWeather(changes)
        .subscribe((data: any) => {
          console.log(data);
          this.result = data.main;
          this.desc = data.weather[0].description;
          this.cloneResult = this.openWeatherSvc.getWeatherFromSvc();
          console.log("Result > " + JSON.stringify(this.cloneResult));
        })
      
    });
  }
}
