import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../interfaces/interfaces';

const apiKey = '';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    apiKey: string = '51324911c4b6b25a7a8a8976e60840dd';
    URI: string = '';

    constructor(private http: HttpClient) {
        this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    }

    getWeather(cityName: string, countryCode: string) {
        return this.http.get(`${this.URI}${cityName},${countryCode}`);
      }
}
