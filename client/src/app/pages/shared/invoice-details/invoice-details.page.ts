import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.page.html',
  styleUrls: ['./invoice-details.page.scss'],
})
export class InvoiceDetailsPage implements OnInit {

  user: any;
  todayDate: any;
  constructor(private router: Router, private activateRoute: ActivatedRoute,) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user=this.router.getCurrentNavigation().extras.state.invoice
      }
    })
   }

  ngOnInit() {
    var today = new Date()
    this.todayDate = today.getUTCFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  }

}
