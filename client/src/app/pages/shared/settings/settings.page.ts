import { AuthService } from 'src/app/services/authService/auth.service';
import { Router,NavigationExtras} from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/profile'])
  }

  support() {
    this.router.navigate(['/support'])
  }

  contactUs() {
    this.router.navigate(['/contact-us'])
  }

  aboutUs() {
    this.router.navigate(['/about-us'])
  }

  logout() {
    this.auth.logout();
  }
}
