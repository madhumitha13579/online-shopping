import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  cards: any
  items: any



  constructor(private serv: SampleserviceService, private router: Router) { }

  ngOnInit(): void {
    this.serv.getProductDetails().subscribe(details => {
      this.cards = details



    })




  }


  out() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }
  home() {
    this.router.navigate(['/dashboard'])
  }
  shop() {
    this.router.navigate(['/shopping'])
  }

  wish() {
    this.router.navigate(['/wishlist'])
  }


















  
}
