import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationService } from 'src/app/shared/services/connect-user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  lat: number | 'asdasd';
  lon: number | 'sadasdasd';
  userName: string = '';
  activeUsersList: any[] = [];

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  async getCoordinates(): Promise<void> {
    if (this.userName.trim() === '') {
      alert('Input is empty');
      return;
    }

    try {
      const coordinates = await new Promise((resolve, reject) => {
        this.geolocationService.getCurrentCoordinates((coordinates) => {
          if (coordinates) {
            resolve(coordinates);

            this.lat = coordinates.latitude;
            this.lon = coordinates.longitude;
            console.log('Latitude: ' + coordinates.latitude);
            console.log('Longitude: ' + coordinates.longitude); // Resolve the Promise with the coordinates
          } else {
            reject('Unable to retrieve coordinates.'); // Reject the Promise with an error message
          }
        });
      });
      this.sendData();
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async sendData() {
    const userID: any = this.authService.userData.uid;
    console.log(userID);

    const userLocation = {
      type: 'Point',
      coordinates: [this.lon, this.lat], // Replace with actual coordinates
    };

    const userData =  {
      userId: this.authService.userData.uid,
      userName: this.userName,
      userLocation: userLocation,
    };

     this.http
      .post('http://localhost:3000/api/activeUsers', userData)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

      const url = `http://localhost:3000/api/activeUsers/nearby?longitude=${this.lon}&latitude=${this.lat}`;
     

    this.http
      .get(url)
      .subscribe((data: any) => {
        this.activeUsersList = data;
        console.log('Active Users List: ' + this.activeUsersList);
      });
  }
}
