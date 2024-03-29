import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class SharedService {


    baseUrl = 'http://localhost:5000'
    constructor(private http: HttpClient) { }

    showvendor(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/common/showvendor`);

    }

    showcustomer(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/common/showcustomer`)
    }

    searchdate(date1: Date, date2: Date): Observable<any> {
      
        
        return this.http.post<Date>(`${this.baseUrl}/common/searchdate`, { date1, date2 });
    }

    searchOders(date1: Date, date2: Date): Observable<any> {
        
        
        return this.http.post<Date>(`${this.baseUrl}/common/searchoder1`, { date1, date2 });
    }

    searchstockbybranch(data:string): Observable<any> {
       
        
        return this.http.post<string>(`${this.baseUrl}/common/searchstockbybranch`, {data});
    }

    branchdetails(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/common/branchdetails`);

    }

    searchstochbydepartment(data:any):Observable<any[]>{
        return this.http.post<any[]>(`${this.baseUrl}/common/searchstochbydepartment` , data)
    }
}