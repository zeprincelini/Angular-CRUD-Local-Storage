import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  holder = [];
  constructor() { }

  create(body){
    // if(localStorage.getItem('company') !== null){
    //   let company= JSON.parse(localStorage.getItem('company'));
    //   company.push(body);
    //   localStorage.setItem('company', JSON.stringify(company));
    // }else{
    //   localStorage.setItem('company', JSON.stringify(body))
    // }
    this.holder.unshift(body);
    localStorage.setItem('company', JSON.stringify(this.holder));
    
  }

  getCompany(){
    if (localStorage.getItem('company') === null){
      this.holder = [];
    }else{
      this.holder = JSON.parse(localStorage.getItem('company'));
    }
    return this.holder;
  }

  getCompanyById(id){
    let company = JSON.parse(localStorage.getItem('company'));
    for(let i = 0; i < company.length; i++){
      if(company[i].name == id){
        this.holder = company[i];
        //localStorage.setItem('company', JSON.stringify(this.holder));
      }
    }
    // localStorage.setItem('company', JSON.stringify(company))
    return(this.holder)
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

  updateCompany(oldCompany, newCompany){
    let company = JSON.parse(localStorage.getItem('company'));
    for(let i = 0; i < company.length; i++){
      if(company[i].name == oldCompany.name){
        company[i] = newCompany;
      }
    }
    localStorage.setItem('company', JSON.stringify(company));
  }

}
