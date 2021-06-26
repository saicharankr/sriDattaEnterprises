import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  currentUser: any;
  admin: any = environment.roles.adminUser;
  collectionAgent: any = environment.roles.collectionAgent;
  showroom: any = environment.roles.showroomUser;
  role: any;

  async ngOnInit() {
    this.currentUser = await this.auth.getUserForTabs()
    this.role = await this.currentUser.role
  }

}
