import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './features/home/home.component';
// import { LayoutComponent } from './features/layout/layout.component';
// import { ManageassetComponent } from './features/manageasset/manageasset.component';
// import { ManageuserComponent } from './features/manageuser/manageuser.component';
// import { WelcomeComponent } from './features/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './features/home/home.module';
import { LayoutModule } from './features/layout/layout.module';
import { ManageassetModule } from './features/manageasset/manageasset.module';
import { ManageuserModule } from './features/manageuser/manageuser.module';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { AuthInterceptorService } from './core/services/auth-interceptor.service';
import { WelcomeModule } from './features/welcome/welcome.module';
//import { HeaderComponent } from './shared/header/header.component';
//import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import { StatePipe } from './core/pipe/state.pipe';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      clientId: 'angular',
      stsServer: 'https://localhost:5001',
      responseType: 'code',
      redirectUrl: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200',
      scope: 'openid profile roles',
      //logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //LayoutComponent,
    //ManageassetComponent,
    //ManageuserComponent,
    //WelcomeComponent,
    //HeaderComponent,
    //SidebarComponent,
    //StatePipe
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    AuthModule.forRoot(),
    HttpClientModule,
    //NgbModule,
    HomeModule,
    LayoutModule,
    ManageassetModule,
    ManageuserModule,
    WelcomeModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthenticationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }