import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, takeUntil, windowWhen } from 'rxjs';

import { SampleserviceService } from '../sampleservice.service';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { MatDialog } from '@angular/material/dialog';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  itemname: string;
  position: number;
  cost: number;
  shippingAddress: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

<<<<<<< Updated upstream
export class HeaderComponent implements OnInit {
a:any
name:any
f:any
l:any
localhost: any;
  constructor(private dialog: MatDialog, private router: Router, private serv:SampleserviceService){}
  ngOnInit(){
    this.a =localStorage.getItem('email')
    this.name=this.a.split('.').join(' ').split('@',1).join(' ')
    // console.log(this.name)
    this.f=((this.name.split(' ',1))[0])[0]  
    this.l=((this.name.split(' ',2))[1])[0]
    // console.log(this.f[0])
    // console.log(this.l[0]);
    
=======
export class HeaderComponent implements OnInit, OnDestroy {
  userEmail: any
  userName: any
  firstName: any
  lastName: any
  localhost: any;
  onDestroy$ = new Subject<boolean>
  constructor(private dialog: MatDialog, private router: Router, private serv: SampleserviceService) { }
  ngOnInit() {
    this.userEmail = localStorage.getItem('email')
    this.userName = this.userEmail.split('.').join(' ').split('@', 1).join(' ')
    this.firstName = ((this.userName.split(' ', 1))[0])[0]
    this.lastName = ((this.userName.split(' ', 2))[1])[0]
>>>>>>> Stashed changes
  }
  addCustomer() {
    const dialogRef = this.dialog.open(StepperComponent);
<<<<<<< Updated upstream
    dialogRef.afterClosed().subscribe(t=>{
      window.location.reload();
      console.log('output',`${t}`)})
  }
 
  out(){
    // this.router.navigate(['/login'])

    localStorage.clear()
    
  }
onSearch(value:any){
  console.log(' ............. ---', value);
  this.serv.searchItem(value)
  
}
=======
    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      window.location.reload()
    })
>>>>>>> Stashed changes


  }
  out() {
    localStorage.clear()
  }
  onSearch(value: any) {
    this.serv.searchItem(value)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }


}