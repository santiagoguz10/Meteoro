import { Component, OnInit, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { WeatherService } from '../../services/weather.service';

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mapRef = null;
  location = { cityName: 'bogota', countryCode: 'co' };
  weather = undefined;
  
  constructor(
    private loadingCtrl: LoadingController,private weatherService: WeatherService) {}

  ngOnInit() {   
    this.getWeather(this.location.cityName, this.location.countryCode);
    this.loadMap(); 
  }

    async loadMap() {
      //const loading = await this.loadingCtrl.create();
      //loading.present();
      const myLatLng = await this.getLocation();
      const mapEle: HTMLElement = document.getElementById('map');
      this.mapRef = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 12
      });
      google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        //loading.dismiss();
        this.addMaker(myLatLng.lat, myLatLng.lng);
      });
    }
  
    private addMaker(lat: number, lng: number) {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.mapRef,
        title: 'Hello World!'
      });
    }

    getWeather(cityName: string, countryCode: string) {
      this.weatherService
        .getWeather(cityName, countryCode)
        .subscribe(
          res => {
            this.weather = res;
          },
          err => {
            console.log(err);
          }
        );
    }
    submitLocation(cityName,countryCode) {
      if (cityName.value && countryCode.value) {
        this.getWeather(cityName.value, countryCode.value);
  
        cityName.value = '';
        countryCode.value = '';
      } else {
        alert('Please. Insert some values');
      }
      cityName.focus();
      return false;
    }
  
    private async getLocation() {
    return {
      lat: 4.6097,
      lng: -74.0817,
    };
    }
  
  }

