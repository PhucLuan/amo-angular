import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isAdmin = true
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('role') !== 'Admin') {
      this.isAdmin = false
    }
  }

}
