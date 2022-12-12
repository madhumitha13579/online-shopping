import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
<<<<<<< Updated upstream
export class WishlistComponent implements OnInit{
displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress'];
dataSource: Observable<any> = of([{}]);
=======
export class WishlistComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress'];
  dataSource: Observable<any> = of([{}]);
>>>>>>> Stashed changes
  dialog: any;
  onDestroy$=new Subject<boolean>


<<<<<<< Updated upstream
constructor(private serv:SampleserviceService,private router:Router){}

ngOnInit() {
  this.serv.getCustomer()
this.dataSource=this.serv.dataEvent$.pipe(map((n:any)=>{
  // console.log("..................", n)
  return n.filter((x:any)=>x.Wish)
  
}))

=======
  constructor(private serv: SampleserviceService, private router: Router) { }

  ngOnInit() {
    this.serv.getCustomer()
    this.dataSource = this.serv.dataEvent$.pipe(map((details: any) => {
      return details.filter((favItem: any) => favItem.Wish)

    }))
  }
  edit(element: any) {
    const dialogRef = this.dialog.open(AddcustomerComponent,
      {
        data: {
          ...element,
          showeditbutton: true
        }
      });
    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()
  }
  deleteRow(id: any) {
    this.serv.deleteCustomer(id).pipe(takeUntil(this.onDestroy$)).subscribe(()=>{
      window.location.reload()})
  
    
  }

ngOnDestroy(): void {
  this.onDestroy$.next(true);
  this.onDestroy$.complete();
}
>>>>>>> Stashed changes


  
}
edit(element:any) {
  const dialogRef = this.dialog.open(AddcustomerComponent,
    {
      data:{
        ...element,
        showeditbutton:true
      }
    });
  dialogRef.afterClosed().subscribe((t: any) => { console.log('output', `${t}`) })
}

deleteRow(id: any) {
  this.serv.deleteCustomer(id).subscribe(f => {
    
    window.location.reload(); console.log('...', f)
  })
}

   
 
    
  }
 
    
  
  



// this.service.getUsers().pipe(map((val:any)=>val.data),).subscribe(data=>{
//   console.log('data',data)
//   this.dataSource = data;
//  })










// }
