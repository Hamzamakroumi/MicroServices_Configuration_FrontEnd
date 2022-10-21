import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }



  Get_Ecole_profile_dev(): Observable<Object>{

     return this.http.get<Object>("http://localhost:1200/profile/DevProfile");
  }

  Update_Ecole_profile_dev(data:any): Observable<Object> {

    return this.http.post("http://localhost:1200/profile/DevProfile", data);
 }



}
