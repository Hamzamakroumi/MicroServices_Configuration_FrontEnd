import { JwtInterceptor } from './Services/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListerServicesComponent } from './components/micro-services/lister-services/lister-services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GestionEcoleComponent } from './components/micro-services/Des_Gestions/gestion-ecole/gestion-ecole.component';
import { GestionEcoleProfilesComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profiles/gestion-ecole-profiles.component';
import { GestionEcoleProfileDevComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-dev/gestion-ecole-profile-dev.component';
import { GestionEcoleProfileTestComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-test/gestion-ecole-profile-test.component';
import { GestionEcoleProfileProductionComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-production/gestion-ecole-profile-production.component';
import { ListerFichierComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-dev/lister-fichier/lister-fichier.component';
import { UpdateFichierComponent } from './components/micro-services/Des_Gestions/gestion-ecole-profile-dev/update-fichier/update-fichier.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ListerServicesComponent,
    PageNotFoundComponent,
    GestionEcoleComponent,
    GestionEcoleProfilesComponent,
    GestionEcoleProfileDevComponent,
    GestionEcoleProfileTestComponent,
    GestionEcoleProfileProductionComponent,
    ListerFichierComponent,
    UpdateFichierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
