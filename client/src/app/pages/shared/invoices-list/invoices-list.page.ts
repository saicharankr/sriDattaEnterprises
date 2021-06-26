import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {

  constructor() { }
  tasksData: any = [
    {
      id: 1,
      name: 'Krishna',
      loanNo: '123457896',
      emi: 'Rs 2000/- ',
      od: 'Rs 200/-',
      showroom: 'xyz',
      collectionAgent: 'ghy',
      bikeModel: 'Rx-100',
      'aadhar-number': '123457896',
      panNumber: 'xyz',
      'Mobile-Number': '912347856',
      'Total-amount': '50000',
      EMIDuration: '18',
      RemainingEmiDuration: '8',
      perEmiAmount: '2500',
      paymentStatusCurrentMonth: 'Paid',
      paymentMethod: 'Cash',
      pastPayments: [
        { '1': '2000' },
        { '2': '2000' },
        { '3': '2000' },
        { '4': '2000' },
        { '5': '2000' },
      ],
      documents: ['hj'],
      loanCleared:false
    },
    {
      id: 2,
      name: 'Chandu',
      loanNo: '123457596',
      emi: 'Rs 2000/- ',
      od: 'Rs 200/-',
      showroom: 'xyz',
      collectionAgent: 'ghy',
      bikeModel: 'Rx-100',
      'aadhar-number': '123457896',
      panNumber: 'xyz',
      'Mobile-Number': '912347856',
      'Total-amount': '50000',
      EMIDuration: '18',
      RemainingEmiDuration: '8',
      perEmiAmount: '2500',
      paymentStatusCurrentMonth: 'Paid',
      paymentMethod: 'Cash',
      pastPayments: [
        { '1': '2000' },
        { '2': '2000' },
        { '3': '2000' },
        { '4': '2000' },
        { '5': '2000' },
      ],
      documents: ['hj'],
      loanCleared:false
    }
  ];
  
  todayDate: any;
  ngOnInit() {
    var today = new Date()
    this.todayDate = today.getUTCFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()  ;
    console.log(this.todayDate)
  }

}
