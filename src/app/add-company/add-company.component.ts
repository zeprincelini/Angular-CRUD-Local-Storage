import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
employeeDesignation = ['Developer', 'Manager', 'System Admin', 'Team Lead', 'PM'];
today = new Date();
yesterday = this.today.setDate(this.today.getDate() - 1);
skills = ['Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP',
  'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI', 'NLP', 'Photoshop', 'Nodejs' 
  ];

  company: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    employee: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      designation: new FormControl('Developer'),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      skills: new FormGroup({
        name: new FormControl('Java', [Validators.required]),
        rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
      }),
      education: new FormGroup({
        school: new FormArray([
         new FormGroup({
           school: new FormControl('', [Validators.required, Validators.maxLength(50)]),
           course: new FormControl('', [Validators.required, Validators.maxLength(25)]),
           year: new FormControl('', [Validators.required])
         })
        ])
      })
    })
  });
  constructor(private snackbar: MatSnackBar) {
    
   }

  ngOnInit(): void {}

  // date(){
  //   let today = new Date();
  //   return today.setDate(today.getDate() - 1);
  // }
  get formValidation(){
    return this.company.controls;
  }

  get school(){
    return this.company.get('employee.education.school') as FormArray;
  }

  addSchool(){
    const skill = new FormGroup({
      school: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      course: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      year: new FormControl('', [Validators.required])
    })
   
    this.school.push(skill);
  }
  

  onSubmit(){
    console.log(this.company.value);
    this.snackbar.open('Added Successfully', 'dismiss');
  }
}
