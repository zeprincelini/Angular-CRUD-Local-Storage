import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddCompanyComponent } from './add-company/add-company.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-company', component: AddCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
