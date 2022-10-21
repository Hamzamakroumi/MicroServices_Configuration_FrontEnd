import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  

  constructor(private http: HttpClient) { }

  login(data: {email: String , password: String} ){

    return this.http.post("http://localhost:8080/authentication/login", data);
  }


}
