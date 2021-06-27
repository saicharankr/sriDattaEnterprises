import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  user: any;
  todayDate: any;
  public items: any = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute,) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user=this.router.getCurrentNavigation().extras.state.details
      }
    })
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ngOnInit() {
  }

}
