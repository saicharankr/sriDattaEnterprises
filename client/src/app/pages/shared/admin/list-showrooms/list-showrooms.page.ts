import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-showrooms',
  templateUrl: './list-showrooms.page.html',
  styleUrls: ['./list-showrooms.page.scss'],
})
export class ListShowroomsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addShowroom() {
    this.router.navigate(['/add-showroom'])
  }
}
