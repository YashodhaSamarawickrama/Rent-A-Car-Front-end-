import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from './core/api.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeekStatusComponent } from './weekstatus/weekstatus.component';
import { FooterComponent } from './footer/footer.component';
// import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RESTService} from './rest.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlertComponent } from './directives/alert/alert.component';
import { AuthGuardComponent } from './guards/auth-guard/auth-guard.component' 
import { AlertService, AuthenticationService, UserService } from '../services';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminVehiclesComponent } from './admin-vehicles/admin-vehicles.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminAddNewUserComponent } from './admin-add-new-user/admin-add-new-user.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminEditVehicleComponent } from './admin-edit-vehicle/admin-edit-vehicle.component';
import { AdminEditPaymentComponent } from './admin-edit-payment/admin-edit-payment.component';
import { AdminEditReservationComponent } from './admin-edit-reservation/admin-edit-reservation.component';
import { AdminAddNewVehicleComponent } from './admin-add-new-vehicle/admin-add-new-vehicle.component';
import { AdminAddNewPaymentComponent } from './admin-add-new-payment/admin-add-new-payment.component';
import { AdminAddNewReservationComponent } from './admin-add-new-reservation/admin-add-new-reservation.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    WeekStatusComponent,
    FooterComponent,
    // AdminloginComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AdminportalComponent,
    UserComponent,
    VehicleComponent,
    UserRegisterComponent,
    UserProfileComponent,
    AlertComponent,
    AuthGuardComponent,
    AdminVehiclesComponent,
    AdminPaymentsComponent,
    AdminOrdersComponent,
    AdminAddNewUserComponent,
    AdminEditUserComponent,
    AdminEditVehicleComponent,
    AdminEditPaymentComponent,
    AdminEditReservationComponent,
    AdminAddNewVehicleComponent,
    AdminAddNewPaymentComponent,
    AdminAddNewReservationComponent,
   
    
    
  ],
  

  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  
    
  
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
      // { // admin login
      //   path: 'adminlogin',
      //   component: AdminloginComponent
      // },
      { // login
        path: 'login',
        component: LoginComponent
      },
      { // aboutus
        path: 'aboutus',
        component: AboutComponent
      },
      { // register us
        path: 'register',
        component: UserRegisterComponent
      },
      { // contactus
        path: 'contactus',
        component: ContactComponent
      },
      { // admin users
        path: 'users',
        component: UserComponent
      },
      { // admin users
        path: 'adminvehicles',
        component: AdminVehiclesComponent
      },
      { // admin users
        path: 'adminreservations',
        component: AdminOrdersComponent
      },
      { // admin users
        path: 'adminpayments',
        component: AdminPaymentsComponent
      },
      { // adminportal
        path: 'adminportal',
        component: AdminportalComponent
      },
      { // adminportaladduser
        path: 'adminadduser',
        component: AdminAddNewUserComponent
      },
      { // adminportaledituser
        path: 'adminedituser/:user._id',
        component: AdminEditUserComponent
      },
      
      { //vehicle details with params
        path: 'vehicles/:_id/:start_date/:end_date',
        component: VehicleComponent
      },
      { // details with params
        path: 'details/:location/:start_date/:end_date',
        component: DetailsComponent
      }
    ], { useHash: false })
  ],

  providers: [
    ApiService,
    
    VehicleComponent,
    RESTService,
    DetailsComponent,
    AlertService, 
    AuthenticationService, 
    UserService,
    AuthGuardComponent,
    LoginComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
