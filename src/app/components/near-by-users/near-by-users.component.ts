import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-near-by-users',
  templateUrl: './near-by-users.component.html',
  styleUrls: ['./near-by-users.component.scss']
})
export class NearByUsersComponent {

  @Input() activeUserlist: any;
}
