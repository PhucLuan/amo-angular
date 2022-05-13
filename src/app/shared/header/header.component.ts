import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { filter, map } from 'rxjs';
import { HeaderService } from 'src/app/core/services/headerservice/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private headerService: HeaderService) { }

  public namepage = ""
  public isAuthenticated: boolean = false;
  public token: string = "";
  public username: string = "";
  public currentItem: string = "";
  ngOnInit() {
    this.namepage = this.headerService.GetTitle(this.router.url);
    console.log(this.router.url)
    if (localStorage.getItem('user') === null) {

      this.oidcSecurityService
        .checkAuth()
        .subscribe((auth) => (this.isAuthenticated = auth));

      this.oidcSecurityService.userData$.subscribe((data) => {
        if (data !== null) {
          this.username = data.name;
          localStorage.setItem('user', data.name);
          localStorage.setItem('userId', data.sub);
          localStorage.setItem('currentpath', 'Home');
        }
      });
    } else {
      this.currentItem = localStorage.getItem('user') ?? "";
      this.username = localStorage.getItem('user') ?? "";
      this.isAuthenticated = localStorage.getItem('user') !== null;
    }
  }

  ngAfterViewInit() {
    this.SetTitile();
  }
  
  SetTitile() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.headerService.currentpath$.next(title)
        }
      });
    this.headerService.currentpath$.subscribe(
      x => {
        if (!(x && (Object.keys(x).length === 0))) {
          this.namepage = x
        }
      })
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
