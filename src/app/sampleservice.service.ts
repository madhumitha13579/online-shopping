import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Country, State, City } from 'country-state-city';
import { customer,  shopping } from './model';



@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {



  private dataSubject$: Subject<customer[]> = new Subject();
  dataEvent$ = this.dataSubject$.asObservable();
  API_URL = "http://localhost:3000/customer"
  shoppingUrl = " http://localhost:3000/shopping"
  groceryUrl=" http://localhost:3000/groceries"
  data: customer[]=[];



  constructor(private http: HttpClient) { }
  getCustomer() {
    this.http.get(this.API_URL).subscribe((val:any) => {
      this.dataSubject$.next(val);
      this.data = val
    })
  }
  CreateCustomer(data: any): Observable<any> {
    return this.http.post(this.API_URL, data)
  }
  editCustomer(data: any) {
    return this.http.put(`${this.API_URL}/${data.position}`, data)
  }
  deleteCustomer(id: any): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  getRowDetails(id: any) {
   
    return this.http.get(`${this.API_URL}/${id}`)
  }
  login(data: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', data)
  }

  
  getProductDetails():Observable<shopping[]> {
    return this.http.get<shopping[]>(this.shoppingUrl)
  }
  update_wishlist(data: any) {
    const newdata = {
      ...data,
      Wish: !data.Wish
    }
    return this.http.put(`${this.API_URL}/${data.id}`, newdata)

  }
  searchItem(value: any) {
    this.dataSubject$.next(this.data.filter((details: any) => details.itemname.toLowerCase().includes(value.toLowerCase())))
  }


  
getGroceryDetails():Observable<shopping[]>{
  return this.http.get<shopping[]>(this.groceryUrl)
}


}
