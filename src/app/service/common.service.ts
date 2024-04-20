import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class CommonService{

    baseUrl = 'http://51.20.121.169:5000'
    // baseUrl = 'http://localhost:5000'

    constructor(private http:HttpClient){}

    findUser(data:object): Observable<any> {
        
        return this.http.post<Date>(`${this.baseUrl}/common/finduser`, data);
    }


    storeuser(type: string) {
        
        localStorage.setItem('usertype', type);
      }

      getuser(){
        return localStorage.getItem('usertype');
      }

      removeusertype(): void {
        localStorage.removeItem('usertype');
      }

      //to store the branch in the localstorage
      storebranch(type: string) {
        
        localStorage.setItem('branch', type);
      }

      //to the call the stored branch in the different component
      getbranch(){
        return localStorage.getItem('branch');
      }

      //to remove the local stored values
      removebranch(): void {
        localStorage.removeItem('branch');
      }
  }