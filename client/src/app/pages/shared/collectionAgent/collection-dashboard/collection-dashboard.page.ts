import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
@Component({
  selector: 'app-collection-dashboard',
  templateUrl: './collection-dashboard.page.html',
  styleUrls: ['./collection-dashboard.page.scss'],
})
export class CollectionDashboardPage implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout()
  }
}
