import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';
import { MatFormField, MatFormFieldAppearance, MatFormFieldDefaultOptions, MatFormFieldControl } from '@angular/material/form-field';
import { MatSnackBar, } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addcustomer ',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  itemdetail: any;
  route: any;


  constructor(public dialog: MatDialog, private serv: SampleserviceService, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    console.log('--data--', this.data)

    this.itemdetail = new FormGroup({
      position: new FormControl(this.data?.position ?? '', Validators.required,),
      itemname: new FormControl(this.data?.itemname ?? '', Validators.required),
      cost: new FormControl(this.data?.cost ?? '', Validators.required),
      shippingAddress: new FormControl(this.data?.shippingAddress ?? '', Validators.required),
    })

  }

  submit(data: any) {
    this.serv.CreateCustomer(
      { ...data, id: data['position'] }).subscribe(d => {
        // window.location.reload();
        console.log('----', d);
      })
    this.dialog.closeAll();
    console.log('...', data)
  }
  update(deti: any) {

    this.serv.editCustomer(deti).subscribe(v => {
      window.location.reload();
      console.log('------------', v)
    })
  }

  msg1() {
    this._snackBar.open('ok added🎇')
  }
  msg2() {
    this._snackBar.open('ok updated☺')
  }

}