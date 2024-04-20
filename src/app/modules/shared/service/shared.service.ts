import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {
  baseUrl = 'http://51.20.121.169:5000';
// baseUrl = 'http://localhost:5000' ;
constructor(private http: HttpClient) {}

  showvendor(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/common/showvendor`);
  }

  showcustomer(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/common/showcustomer`);
  }

  searchdate(date1: Date, date2: Date): Observable<any> {
    return this.http.post<Date>(`${this.baseUrl}/common/searchdate`, {
      date1,
      date2,
    });
  }

  searchOders(date1: Date, date2: Date): Observable<any> {
    return this.http.post<Date>(`${this.baseUrl}/common/searchoder1`, {
      date1,
      date2,
    });
  }

  searchstockbybranch(data: string): Observable<any> {
    return this.http.post<string>(
      `${this.baseUrl}/common/searchstockbybranch`,
      { data }
    );
  }

  branchdetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/common/branchdetails`);
  }

  searchstochbydepartment(data: any): Observable<any[]> {
    return this.http.post<any[]>(
      `${this.baseUrl}/common/searchstochbydepartment`,
      data
    );
  }

  listingSubDepartment(data: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/common/listingSubDepartment`, {
      data,
    });
  }

  subsubepartment(data: string): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/common/subsubepartment`, {
    data,
    });
  }

  departmentStockDate(from:Date , to:Date ): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/common/departmentStockDate`, {FROM:from , TO:to});
  }

  departmentStockDateAndBranch(branch:string): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/common/dateandbranchwise`, {branch});
  }

  dateAndBranchAndDepartmentAPI( branch:string , department:string): Observable<any> {
    return this.http.post<any[]>(`${this.baseUrl}/common/dateandbranchanddepartment`, {branch , department});
  }

  employeweight(branch:any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/common/employeweight`,{branch});
  }

  salereport(from:Date , to:Date , branch :string):Observable<any[]>{

    return this.http.post<any[]>(`${this.baseUrl}/common/salereport` , {from , to , branch})
  }

  
  finishedGoods(branch: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/common/finishedgoods`, {
      branch,
    });
  }

  showbranch():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/common/showbranch`);
  }
}
