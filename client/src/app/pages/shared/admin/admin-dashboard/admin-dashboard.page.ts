import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout()
  }

  showroomsList() {
    this.router.navigate(['/list-showrooms'])
  }
  addNewUser() {
    this.router.navigate(['/create-new-user'])
  }

}
