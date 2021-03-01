import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(15)])
  });
  constructor() {
    
   }

  ngOnInit(): void {}

  get formValidation(){
    return this.company.controls;
  }

  onSubmit(){
    console.log(this.company.value);
  }
}
