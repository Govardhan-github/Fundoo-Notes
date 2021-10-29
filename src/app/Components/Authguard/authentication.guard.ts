import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { AuthguardService } from 'src/app/Services/Authguard/authguard.service'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthGuardService: AuthguardService, private router: Router) { }
  canActivate(): boolean {
    if (!this.AuthGuardService.gettoken()) {
      this.router.navigateByUrl("/login");
      console.log("login Success")
    }
    return this.AuthGuardService.gettoken();

  }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
