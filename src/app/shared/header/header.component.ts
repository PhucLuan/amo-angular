import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {}

  public namepath$ = new BehaviorSubject<any>('');
  public namepage = ""
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
  }

  ngAfterViewInit() {
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
        
        //this.titleService.setTitle(`My App - ${title}`);
        console.log(title);
        //this.namepage = title;
        // this.namepath$.next("Ahihihi "+title);
        // this.namepath$.subscribe(x => this.namepage = x) 
        //console.log( this.namepath)
      }
    });
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
