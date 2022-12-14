import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { customer } from '../model';
import { SampleserviceService } from '../sampleservice.service';

export interface PeriodicElement {
  itemname: string;
  position: number;
  cost: number;
  shippingAddress: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress', 'menu', 'wish'];
  dataSource: Observable<customer[]> = of([]);
  kill$ = new Subject<boolean>


  constructor(private serv: SampleserviceService, private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.serv.getCustomer()
    this.dataSource = this.serv.dataEvent$
  }

  edit(element: any) {
    const dialogRef = this.dialog.open(AddcustomerComponent,
      {
        data: {
          ...element,
          showeditbutton: true
        }
      });
    dialogRef.afterClosed().pipe(takeUntil(this.kill$)).subscribe(() => {
      window.location.reload()
    })
  }

  deleteRow(id: any) {
    this.serv.deleteCustomer(id).pipe(takeUntil(this.kill$)).subscribe(() => {
      window.location.reload()
    })


  }

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




}
