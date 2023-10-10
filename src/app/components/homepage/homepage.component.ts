import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationService } from 'src/app/shared/services/connect-user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  lat: number | undefined;
  lon: number | undefined;
  userInput: string = '';

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private http: HttpClient
  ){}

  getCoordinates(): void {
    if (this.userInput.trim() === '') {
      alert('Input is empty');
      return
    }
    console.log("User ID "+this.authService.userData.uid)
    
    this.geolocationService.getCurrentCoordinates((coordinates) => {
      if (coordinates) {
        this.lat = coordinates.latitude;
        this.lon = coordinates.longitude;
        console.log('Latitude: ' + coordinates.latitude);
        console.log('Longitude: ' + coordinates.longitude);

        // alert("Your coordinates:"+ this.lat +"\t"+ this.lon);

        const userData = {
          userId: this.authService.userData.uid,
          userCoordinates: {
            latitude: this.lat,
            longitude: this.lon
          }
        }

      this.http.post('http://localhost:3000/api',userData)


      } else {
        console.log('Unable to retrieve coordinates.');
      }
    });
  }

}
