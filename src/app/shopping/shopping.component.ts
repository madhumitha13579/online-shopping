import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  cards: any
  // = [{
  //   ItemName: 'ghhh',
  //   Cost: '111'
  // }]
  items: any;
  onDestroy$ = new Subject<boolean>
  currentRoute: any;

  constructor(private serv: SampleserviceService, private router: Router) { }


  ngOnInit(): void {
<<<<<<< Updated upstream
     this.serv.getProductDetails().subscribe(d=>{
      this.cards=d
      // console.log(this.cards);
     
      
     })
=======
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((currentRoute: any) => {
      console.log('....', currentRoute)
>>>>>>> Stashed changes

      if (currentRoute.url.includes('clothes')) {
        this.serv.getProductDetails().pipe(takeUntil(this.onDestroy$)).subscribe(details => {
          this.cards = details
          console.log('----cards---', this.cards)

        })
      } else if (currentRoute.url.includes('grocery')) {
        this.serv.getGroceryDetails().pipe(takeUntil(this.onDestroy$)).subscribe(details => {
          this.items = details
          console.log('----items---', this.items)

        })
      }
    })
  }
  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
































