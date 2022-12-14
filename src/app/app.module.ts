import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SecpageComponent } from './secpage/secpage.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DetailsComponent } from './details/details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { Gaurd } from './gaurd.service';
import { MatDividerModule } from '@angular/material/divider';
import { ShoppingComponent } from './shopping/shopping.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MatListModule } from '@angular/material/list';
import { StyleDirective } from './style.directive';
import { MatExpansionModule } from '@angular/material/expansion';








@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AddcustomerComponent,
    SecpageComponent,
    LoginComponent,
    DetailsComponent,
    StepperComponent,
    ShoppingComponent,
    WishlistComponent,
    StyleDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [Gaurd],
  bootstrap: [AppComponent],

})
export class AppModule { }
