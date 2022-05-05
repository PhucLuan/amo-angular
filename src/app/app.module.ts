import { MatIconModule } from '@angular/material/icon';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './features/home/home.module';
import { LayoutModule } from './features/layout/layout.module';
import { ManageassetModule } from './features/manageasset/manageasset.module';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { AuthInterceptorService } from './core/services/auth-interceptor.service';
import { WelcomeModule } from './features/welcome/welcome.module';
import { ModalDetailInfoComponent } from './shared/modal-detail-info/modal-detail-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalbtnComponent } from './shared/button/modalbtn/modalbtn.component';
import { MatButtonModule } from '@angular/material/button';
import { ManageAssignmentModule } from './features/manage-assignment/manage-assignment.module';
import { ManageuserModule } from './features/manageuser/manageuser.module';
import { ManageReportModule } from './features/manage-report/manage-report.module';

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
    ModalDetailInfoComponent,
    ModalbtnComponent,
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    AuthModule.forRoot(),
    HttpClientModule,
    HomeModule,
    LayoutModule,
    ManageassetModule,
    ManageuserModule,
    ManageAssignmentModule,
    WelcomeModule,
    ManageReportModule,
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
