import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SampleserviceService } from '../sampleservice.service';
import { Country, State, City }  from 'country-state-city';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


// interface state {
//   value: string;
 
// }

// interface country {
//   name: string;
 
// }
// interface district {
//   value2: string;
 
//}


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})


export class StepperComponent implements OnInit {
  
states:any
  
firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    //email:['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    position: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    itemname: ['', Validators.required],
  });
 fourthFormGroup = this._formBuilder.group({
    cost: ['', Validators.required],
  });
  fifthFormGroup:any
  country=new FormControl(null,Validators.required)
  state= new FormControl(null, Validators.required )
 countries:any

 constructor(private _formBuilder: FormBuilder, private service: SampleserviceService, 
  public dialog: MatDialog) {}

 ngOnInit(): void {
   this.countries=Country.getAllCountries()
    // console.log(Country.getAllCountries())
this.fifthFormGroup=new FormGroup({
  country:this.country,
  state:this.state

})

this.country.valueChanges.subscribe((d:any)=>{
  this.states=State.getStatesOfCountry(d.isoCode)
  console.log('----',d)
  console.log('----',this.states)

})
  }

<<<<<<< Updated upstream
  form1(){
    console.log(this.firstFormGroup.value);
    //this.firstFormGroup.value
  }

  form2(){
    console.log(this.secondFormGroup.value);
    //this.secondFormGroup.value
=======
  form1() {
    this.firstFormGroup.value

  }

  form2() {
    this.secondFormGroup.value

>>>>>>> Stashed changes
  }
  form3(){
    console.log(this.thirdFormGroup.value);
  }

  form4(){
    console.log(this.fourthFormGroup.value);
  }
<<<<<<< Updated upstream
  form5(){
    console.log(this.fifthFormGroup.value);
    this.service.CreateCustomer({...this.secondFormGroup.value,...this.thirdFormGroup.value,...this.fourthFormGroup.value,
      id:this.secondFormGroup.value['position']}).subscribe(a => {
     window.location.reload();
      console.log('----', a);
=======
  form5() {
    this.fifthFormGroup.value
    this.service.CreateCustomer({
      ...this.secondFormGroup.value, ...this.thirdFormGroup.value, ...this.fourthFormGroup.value,
      id: this.secondFormGroup.value['position']
    }).subscribe(() => {
      window.location.reload();

>>>>>>> Stashed changes
    })
  this.dialog.closeAll();
  
  }

}