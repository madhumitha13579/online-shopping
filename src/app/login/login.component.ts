import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { SampleserviceService } from '../sampleservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetail: any
  onDestroy$ = new Subject<boolean>
  constructor(private router: Router, private _snackBar: MatSnackBar, private service: SampleserviceService) { }
  ngOnInit() {
    this.userdetail = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  openSnackBar() {
    this._snackBar.open('Successful')
  }
  submit(data: any) {
    this.service.login(data).pipe(takeUntil(this.onDestroy$)).subscribe(()=>{
      window.location.reload()})
    localStorage.setItem('loginSuccessfully', 'true')
    localStorage.setItem('email', data.email)
    this.router.navigate(['/dashboard'])
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}