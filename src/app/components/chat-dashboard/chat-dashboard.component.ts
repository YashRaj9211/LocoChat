import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss']
})
export class ChatDashboardComponent {
  constructor(
    private apiService: ApiService,
    private locaStore: LocalStorageService
  ) {}

  activeUsersJSON: any;
  ngOnInit() {
    const userlocation = this.locaStore.getItem('userLocation');
    console.log(userlocation);
    console.log('From active user' + userlocation[0]);
    this.apiService
      .getNearbyUsers(userlocation[0], userlocation[1])
      .subscribe((data: any) => {
        this.activeUsersJSON = data;
        console.log(JSON.stringify(this.activeUsersJSON));
      });
  }
}
