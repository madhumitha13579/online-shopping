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
  
cards:any
  


  constructor(private serv: SampleserviceService, private router:Router) { }

  ngOnInit(): void {
     this.serv.getProductDetails().subscribe(details=>{
      this.cards=details
      // console.log(this.cards);
     
      
     })

  
    
    
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


















  // ngOnInit(): void {
  //     this.serv.getProductDetails().subscribe(d=>{
  //       // console.log(d);
  //       this.f=d
  //       console.log(this.f)


  //        this.cards=[
  //         {img:this.f[0].img, 
  //           ItemName:this.f[0].ItemName, 
  //           Cost:this.f[0].Cost, 
  //           MaterialComposition:this.f[0].ProductDetails.MaterialComposition, 
  //           Style:this.f[0].ProductDetails.Style, 
  //           Pattern:this.f[0].ProductDetails.Pattern },

  //         {img:this.f[1].img, 
  //           ItemName:this.f[1].ItemName, 
  //           Cost:this.f[1].Cost, 
  //           MaterialComposition:this.f[1].ProductDetails.MaterialComposition, 
  //           Style:this.f[1].ProductDetails.Style, 
  //           Pattern:this.f[1].ProductDetails.Pattern },

  //           {img:this.f[2].img, 
  //             ItemName:this.f[2].ItemName, 
  //             Cost:this.f[2].Cost, 
  //             MaterialComposition:this.f[2].ProductDetails.MaterialComposition, 
  //             Style:this.f[2].ProductDetails.Style, 
  //             Pattern:this.f[2].ProductDetails.Pattern }

  //       ]

  //     })
  //   }

}
