import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ) {}
  public isAuthenticated: boolean = false;
  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      if (auth == true) {
        this.router.navigate(['app']);
      }
    });
  }
  login() {
    this.oidcSecurityService.authorize();
  }
}
