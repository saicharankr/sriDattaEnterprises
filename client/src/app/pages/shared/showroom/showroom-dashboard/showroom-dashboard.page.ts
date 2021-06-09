import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';


@Component({
  selector: 'app-showroom-dashboard',
  templateUrl: './showroom-dashboard.page.html',
  styleUrls: ['./showroom-dashboard.page.scss'],
})
export class ShowroomDashboardPage implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  logout() {
  this.auth.logout()
}
}
