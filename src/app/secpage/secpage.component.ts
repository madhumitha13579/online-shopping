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
<<<<<<< Updated upstream
    //console.log("---details---",this.route.snapshot.params['id'])
    this.serv.getRowDetails(this.route.snapshot.params['id']).subscribe((d: any) => {
      console.log('!!!!!!!!!',d)
=======
    
    this.serv.getRowDetails(this.route.snapshot.params['id']).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((d: any) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  dialogRef.afterClosed().subscribe((t: any) => { console.log('output', `${t}`) })
=======
  dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()
>>>>>>> Stashed changes
}

deleteRow(id: any) {
<<<<<<< Updated upstream
  this.serv.deleteCustomer(id).subscribe(f => {
=======
  this.serv.deleteCustomer(id).pipe(takeUntil(this.onDestroy$)).subscribe(() => {
>>>>>>> Stashed changes
    this.router.navigate(['/dashboard'])
    window.location.reload(); console.log('...', f)
  })
}
ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
}  

out(){
  this.router.navigate(['/login'])
  localStorage.clear()
}
home(){
  this.router.navigate(['/dashboard'])
}
shop(){
this.router.navigate(['/shopping'])
}

wish(){
this.router.navigate(['/wishlist'])
}
  
}
