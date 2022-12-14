import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, of, Subject, takeUntil } from 'rxjs';
import {  shopping } from '../model';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  cards: Observable<shopping[]>=of([])
  items: Observable<shopping[]>=of([])
  onDestroy$ = new Subject<boolean>
  

  constructor(private serv: SampleserviceService, private router: Router) { }


  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((currentRoute: any) => {


      if (currentRoute.url.includes('clothes')) {
        this.cards=this.serv.getProductDetails()


        }
        else if (currentRoute.url.includes('grocery')) {
          this.items=this.serv.getGroceryDetails()
  
  
          }
      } )
      }
    }
  
  

































