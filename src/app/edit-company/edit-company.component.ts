import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  submitted = false;
  employeeDesignation = ['Developer', 'Manager', 'System Admin', 'Team Lead', 'PM'];
  today = new Date();
  yesterday = this.today.setDate(this.today.getDate() - 1);
  skills = ['Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP',
    'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI', 'NLP', 'Photoshop', 'Nodejs' 
    ];
  data = [];
  currentUrl;

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
        name: new FormControl(['Java'], [Validators.required]),
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

  constructor(private snackbar: MatSnackBar, private crud: CrudService, private routeId: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUrl = this.routeId.snapshot.params.id;
    this.data = this.crud.getCompanyById(this.currentUrl);
    // setTimeout(()=>{
    //   let store = this.crud.getCompanyById(this.currentUrl);
    //   this.data = store;
    // }, 3000)
  }

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
    this.submitted = true;
    if(this.company.valid){
    this.crud.updateCompany(this.company.value);
    this.snackbar.open('Added Successfully', 'dismiss');
    }
  }
}
