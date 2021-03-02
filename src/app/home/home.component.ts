import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../crud.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
displayedColumns : String[]= ['no', 'name', 'email', 'phone', 'date', 'actions'];
dataSource;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.dataSource = this.crud.getCompany();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }

  delete(id){
    for(let i = 0; i < this.dataSource.length; i++){
      if(this.dataSource[i].name == id){
        this.dataSource.splice(i, 1);
      }
    }
    this.crud.deleteCompany(id);
  }
}
