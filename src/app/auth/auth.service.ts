import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    // registered?: boolean;
  }

@Injectable({providedIn: "root"})

export class AuthService {

    constructor(private http: HttpClient){

    }

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPAihrUIs1DhU93b2luZ2Ef33dAvvVlEs", 
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}