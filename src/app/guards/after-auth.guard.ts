import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';
import { TokenServiceService } from '../Services/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {

  constructor(private tokenService: TokenServiceService,
              private router: Router){

}

canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): boolean {

              if(this.tokenService.loggedIn()){
                  this.router.navigateByUrl("/microservices");
              return false;
            }
              return true;
          }

}
