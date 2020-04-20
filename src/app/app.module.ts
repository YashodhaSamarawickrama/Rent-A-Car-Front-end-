import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { ApiService } from './core/api.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeekStatusComponent } from './weekstatus/weekstatus.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    WeekStatusComponent,
    FooterComponent,
    AdminloginComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AdminportalComponent,
    UserComponent,
    VehicleComponent,
    PaymentComponent,
    ReservationComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    // Routes
    RouterModule.forRoot([
      { // /
        path: '',
        component: HomeComponent
      },
      { // home
        path: 'home',
        component: HomeComponent
      },
      
      { // details
        path: 'details',
        component: DetailsComponent
      },
      { // admin login
        path: 'adminlogin',
        component: AdminloginComponent
      },
      { // login
        path: 'login',
        component: LoginComponent
      },
      { // aboutus
        path: 'aboutus',
        component: AboutComponent
      },
      { // contactus
        path: 'contactus',
        component: ContactComponent
      },
      { // adminportal
        path: 'adminportal',
        component: AdminportalComponent
      },
      { // details with params
        path: 'details/:location/:start_date/:end_date',
        component: DetailsComponent
      }
    ], { useHash: false })
  ],

  providers: [
    ApiService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
