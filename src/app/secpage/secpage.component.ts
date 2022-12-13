import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-secpage',
  templateUrl: './secpage.component.html',
  styleUrls: ['./secpage.component.css']
})

export class SecpageComponent implements OnInit, OnDestroy {
  value: any;
  onDestroy$ = new Subject<boolean>;
  
  constructor(private serv:SampleserviceService,private router:Router, private route:ActivatedRoute, private dialog: MatDialog,){}
  ngOnInit(){
    
    this.serv.getRowDetails(this.route.snapshot.params['id']).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((d: any) => {
      this.value=d
    })
 }
edit(value:any) {
  const dialogRef = this.dialog.open(AddcustomerComponent,
    {
      data:{
        ...value,
        showeditbutton:true
      }
    });
  dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()
}
deleteRow(id: any) {
  this.serv.deleteCustomer(id).pipe(takeUntil(this.onDestroy$)).subscribe(() => {
    this.router.navigate(['/dashboard'])
    window.location.reload(); 
  })
}
ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
}  

  
}
