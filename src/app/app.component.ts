import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientJsonpModule} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string = ""
  API_KEY:any = "caaa0681fae72d1818249bc9511fabc8"
  setTrue = false
  // source = "winter.jpeg"
  source ='../assets/default.jpeg'
  cityName:string = ""
  wind : any
  humidity:any
  pressure:any
  longitude:any
  latitude:any
  country:any

  temp :any = 0

  placeValue :string = "Enter a city name..."


  constructor(private http: HttpClient) {
  }

  getWeather() {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}`).subscribe((data:any) =>{
  // this.http.jsonp(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}`, 'callback').subscribe((data:any) =>{
    this.temp = data.main.temp;
    this.wind = data.wind.speed;
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.longitude = data.coord.lon;
    this.latitude = data.coord.lat;
    this.country = data.sys.country;
    this.cityName = data.name;
    this.temp  -= 273.15
    this.temp = this.temp.toFixed(2)

    if(this.temp > 20 ){
      this.source = '../assets/summer.jpeg'
    }
    else if(this.temp > 15 && this.temp < 20){
      this.source = '../assets/spring.jpeg'
    }
    else  {
      this.source = '../assets/winter.jpeg'
    }
    this.longitude = this.longitude.toFixed(2)
    this.latitude = this.latitude.toFixed(2)
    // this.wind = this.wind.toFixed(2)
    this.wind = this.wind * 60 * 60 / 1000
    this.wind = this.wind.toFixed(2)
// prints 3.6

   console.log(data)
  })
  
  setTimeout(() => {
  // console.log(this.temp.main.temp)
 

  this.setTrue = true
  },1000)

}

}
