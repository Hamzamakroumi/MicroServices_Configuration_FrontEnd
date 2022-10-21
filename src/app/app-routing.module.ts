import { GestionEcoleComponent } from './components/micro-services/Des_Gestions/gestion-ecole/gestion-ecole.component';
import { ListerServicesComponent } from './components/micro-services/lister-services/lister-services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { ListerFichierComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-dev/lister-fichier/lister-fichier.component';
import { UpdateFichierComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-dev/update-fichier/update-fichier.component';

const routes: Routes = [

  {path: "" , redirectTo: '/login', pathMatch: 'full'  /*, canActivate: [AuthGuard] */ },
  {path: "login", component: LoginComponent ,  canActivate: [AfterAuthGuard]  } ,
  {path: "microservices", component:ListerServicesComponent, canActivate: [AuthGuard]},
  {path: "gestionEcole", component:GestionEcoleComponent, canActivate: [AuthGuard]},
  {path: "ListerFichierComponent", component: ListerFichierComponent, canActivate: [AuthGuard]},
  {path: "UpdateFichierComponent", component: UpdateFichierComponent, canActivate: [AuthGuard]},
  {path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
