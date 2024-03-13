import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class SharedService {

    
    baseUrl = 'http://localhost:5000'
    constructor(private http:HttpClient){}

    showvendor():Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUrl}/common/showvendor`)
    }
}