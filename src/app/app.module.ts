import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import { NearByUsersComponent } from './components/near-by-users/near-by-users.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomepageComponent,
    NavbarComponent,
    NearByUsersComponent,
    ActiveUsersComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}