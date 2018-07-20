import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlertComponent} from './dialog/alert/alert.component';
import { SignInComponent } from './module/sign-in/component/sign-in.component';
import { HomeComponent } from './module/home/component/home.component';
import { SignUpComponent } from './module/sign-up/component/sign-up.component';

import { fakeBackendProvider } from './helper/fake-backend';
import { routing } from './app.routing';
import { JwtInterceptor } from './helper/jwt.inteceptor';
import { AlertService } from './services/alert.service';
import {AuthGuard} from './guard/auth-guard';
import {SignInService} from './module/sign-in/service/sign-in.service';
import {UserFormService} from './module/user/service/user-form.service';
import {ErrorInteceptor} from './helper/ErrorInteceptor';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    SignInService,
    UserFormService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInteceptor, multi: true},

    // provider yg digunakan untuk membuat back end buatan
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
