import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Gaurd } from './gaurd.service';
import { LoginComponent } from './login/login.component';
import { SecpageComponent } from './secpage/secpage.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StepperComponent } from './stepper/stepper.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'secpage/:id', component:SecpageComponent},
  {path:'dashboard', canActivate:[Gaurd], component:DashboardComponent},
  {path:'login',component:LoginComponent},
<<<<<<< Updated upstream
  {path:'shopping', canActivate:[Gaurd],component:ShoppingComponent},
=======

  {path:'shopping',canActivate:[Gaurd],component:ShoppingComponent,
   children:[
    {path:'grocery',canActivate:[Gaurd],component:ShoppingComponent},
    {path:'clothes',canActivate:[Gaurd], component:ShoppingComponent}
  ]},

>>>>>>> Stashed changes
  {path:'wishlist', canActivate:[Gaurd],component:WishlistComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
