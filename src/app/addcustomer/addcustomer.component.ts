import { Component, Inject, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';
import { MatFormField, MatFormFieldAppearance, MatFormFieldDefaultOptions, MatFormFieldControl } from '@angular/material/form-field';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-addcustomer ',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit,OnDestroy {
  itemdetail: any;
  route: any;
  onDestroy$=new Subject<boolean>
  
  constructor(public dialog: MatDialog, private serv: SampleserviceService, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
    this.itemdetail = new FormGroup({
      position: new FormControl(this.data?.position ?? '', Validators.required,),
      itemname: new FormControl(this.data?.itemname ?? '', Validators.required),
      cost: new FormControl(this.data?.cost ?? '', Validators.required),
      shippingAddress: new FormControl(this.data?.shippingAddress ?? '', Validators.required),
    })

  }

  submit(data: any) {
    this.serv.CreateCustomer({
       ...data, id: data['position'] }).pipe(takeUntil(this.onDestroy$)).subscribe()
    this.dialog.closeAll();
  }
  update(data: any) {
    this.serv.editCustomer(data).pipe(takeUntil(this.onDestroy$)).subscribe(()=>{
      window.location.reload()})
    
  }
  msg1() {
    this._snackBar.open('ok added🎇')
  }
  msg2() {
    this._snackBar.open('ok updated☺')
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
} 


}