import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Registers the service in the root injector
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  postUserData(userData: any) {
    return this.http.post(`${this.baseUrl}/activeUsers`, userData);
  }

  getNearbyUsers(longitude: any, latitude: any) {
    const url = `${this.baseUrl}/activeUsers/nearby?longitude=${longitude}&latitude=${latitude}`;
    // console.log(url);
    return this.http.get(url);
  }

  addUser(userData: any){
    return this.http.post(`${this.baseUrl}/users/addUser`, userData).subscribe(
      (response) => {
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }

  
}
