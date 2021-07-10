import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-showroom',
  templateUrl: './add-showroom.page.html',
  styleUrls: ['./add-showroom.page.scss'],
})
export class AddShowroomPage implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fiveFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
    
    });
    this.secondFormGroup = this._formBuilder.group({
    
    });
  }

}
