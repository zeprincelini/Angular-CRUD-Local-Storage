import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
click = true;
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.click = !this.click;
}
}
