import { AccountService } from './../Services/account.service';
import { TokenServiceService } from './../Services/token-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenServiceService,
              private accountService: AccountService,
              private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(!this.tokenService.loggedIn()){

          this.tokenService.remove();
          this.accountService.changeStatus(false);
          this.router.navigateByUrl("/login");
          
        return false;
      }
    return true;
  }

}
