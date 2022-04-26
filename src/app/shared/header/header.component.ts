import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  public namepage: string = "";
  public isAuthenticated: boolean = false;
  public token: string = "";
  public username: string = "";
  public currentItem: string = "";
  ngOnInit() {
    //this.currentItem = 'Ahihi';
    if (localStorage.getItem('user') === null) {

      this.oidcSecurityService
        .checkAuth()
        .subscribe((auth) => (this.isAuthenticated = auth));

      this.oidcSecurityService.userData$.subscribe((data) => {
        console.log(data)
        if (data !== null) {
          this.username = data.name;
          localStorage.setItem('user', data.name);
          localStorage.setItem('userId', data.sub);
        }
      });
    } else {
      this.currentItem = localStorage.getItem('user')??"";
      this.username = localStorage.getItem('user')??"";
      this.isAuthenticated = localStorage.getItem('user') !== null;
    }

    this.namepage = 'Home';
  }

  login() {
    this.oidcSecurityService.authorize();
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    this.oidcSecurityService.logoff();
  }
}

