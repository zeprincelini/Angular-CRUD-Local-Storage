import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor() { }

  create(body){
    if(localStorage.getItem('company')){
      let company = JSON.parse(localStorage.getItem('company'));
      company.push(body);
      localStorage.setItem('company', JSON.stringify(company));
    }
    localStorage.setItem('company', JSON.stringify(body))
  }

  getCompany(){
    let company = JSON.parse(localStorage.getItem('company'));
    return company;
  }

  deleteCompany(id){
    let company = JSON.parse(localStorage.getItem('company'));
    for(let i = 0; i < company.length; i++){
      if(company[i].name == id){
        company.splice(i, 1);
      }
    }
    localStorage.setItem('company', JSON.stringify(company));
  }

  // deleteCompany(id){
  //   let company = JSON.parse(localStorage.getItem('company'));
  //   localStorage.removeItem(id);
  // }

  updateCompany(oldCompany, newCompany){
    let company = JSON.parse(localStorage.getItem('company'));
    for(let i = 0; i < company.length; i++){
      if(company[i].id == oldCompany.id){
        company[i] = newCompany;
      }
    }
    localStorage.setItem('company', JSON.stringify(company));
  }

}
