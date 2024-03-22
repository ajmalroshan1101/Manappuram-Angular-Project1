import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class CommonService{

    baseUrl = 'http://localhost:5000'

    constructor(private http:HttpClient){}

    findUser(data:object): Observable<any> {
        
        return this.http.post<Date>(`${this.baseUrl}/common/finduser`, data);
    }

     private userSubject = new BehaviorSubject<any>(null)

     userData$ = this.userSubject.asObservable();

    setuser(data:any){

        this.userSubject.next(data);
    }

    storeuser(type: string) {
        
        localStorage.setItem('usertype', type);
      }

      getuser(): string | null {
        return localStorage.getItem('usertype');
      }

      removeusertype(): void {
        localStorage.removeItem('usertype');
      }
  }