import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';

export interface PeriodicElement {
  itemname: string;
  position: number;
  cost: number;
  shippingAddress: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, itemname: 'Bag', cost: 1300, shippingAddress: 'HSR Layout'},
//   {position: 2, itemname: 'Watch', cost: 460, shippingAddress: 'HSR Layout'},
//   {position: 3, itemname: 'Shoes', cost: 1800, shippingAddress: 'HSR Layout'},
//   {position: 4, itemname: 'Laptop', cost: 99000, shippingAddress: 'HSR Layout'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress', 'menu', 'wish'];
  dataSource: Observable<any> = of([{}]);
<<<<<<< Updated upstream
 
  

  constructor(private serv: SampleserviceService, private router: Router, private dialog: MatDialog,
    ) { }
=======
  kill$ = new Subject<boolean>


  constructor(private serv: SampleserviceService, private router: Router, private dialog: MatDialog) { }
>>>>>>> Stashed changes
  ngOnInit() {
    this.serv.getCustomer()
    this.dataSource = this.serv.dataEvent$
    
    
  }
<<<<<<< Updated upstream
  // edit(){
  //   this.serv.CreateCustomer({}).subscribe(t=>{console.log('...',t)})
  //   this.dialog.open(AddcustomerComponent)
  // }
  edit(element:any) {
=======

  edit(element: any) {
>>>>>>> Stashed changes
    const dialogRef = this.dialog.open(AddcustomerComponent,
      {
        data: {
          ...element,
          showeditbutton: true
        }
      });
<<<<<<< Updated upstream
    dialogRef.afterClosed().subscribe((t: any) => { console.log('output', `${t}`) })
  }

  deleteRow(id: any) {
    this.serv.deleteCustomer(id).subscribe(f => {
      
      window.location.reload(); console.log('...', f)
=======
    dialogRef.afterClosed().pipe(takeUntil(this.kill$)).subscribe(() => {
      window.location.reload()
    })
  }

  deleteRow(id: any) {
    this.serv.deleteCustomer(id).pipe(takeUntil(this.kill$)).subscribe(() => {
      window.location.reload()
>>>>>>> Stashed changes
    })


  }
<<<<<<< Updated upstream
  // edit(){
  //   this.serv.CreateCustomer(
  //     {
  //       id:676,
  //       position: 48,
  //       itemname: "happy",
  //       cost: 78000,
  //       shippingAddress:"HSR Layout"
  //     }
  //   ).subscribe(d=>{console.log('----',d)})

  // }
  // delete(){
  //   this.serv.deleteCustomer(
  //     {
  //       id: 1,
  //       position: 1,
  //       itemname: "lahenga",
  //       cost: 4000,
  //       shippingAddress: "HSR Layout"
  //     }
  //   ).subscribe(d=>{console.log('----',d)})
  // }


  nextpage(id:any){
    this.router.navigate(['/secpage',id])
  }
 

add_wish(d:any){
  this.serv.update_wishlist(d).subscribe(x=>{
    
    console.log('=============',x);
    //window.location.reload()
    
  })
}
=======

  ngOnDestroy(): void {
    this.kill$.next(true)
    this.kill$.complete()
  }
  nextpage(id: any) {
    this.router.navigate(['/secpage', id])
  }
  add_wish(d: any) {
    this.serv.update_wishlist(d).subscribe()
  }
>>>>>>> Stashed changes




}
