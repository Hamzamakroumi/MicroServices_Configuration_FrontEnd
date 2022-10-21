import { TokenServiceService } from './../../Services/token-service.service';
import { AccountService } from './../../Services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

cuurentUser :any;

  constructor(private accountService: AccountService,
              private tokenService: TokenServiceService,
              private router: Router) { }

  ngOnInit(): void {

    this.accountService.authStatus.subscribe(res=>{
      this.cuurentUser = this.tokenService.getInfo();
    });
  }


  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/login");
  }

}
