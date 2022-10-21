import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TokenServiceService } from 'src/app/Services/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  constructor(private Authservice: AuthServiceService,
              private Tokenservice: TokenServiceService,
              private account: AccountService,
              private router :Router) { }

  ngOnInit(): void {
  }

  login(){

    this.Authservice.login(this.loginForm.value).subscribe(res => this.handleResponse(res))

   }

   handleResponse(res: any){

    this.Tokenservice.handle(res);
    this.account.changeStatus(true);
    this.router.navigateByUrl("/microservices");

   }

}
