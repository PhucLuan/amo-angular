import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public typeSelected$ = new BehaviorSubject<any>({});
  public searchKey$ = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) { }
  
  FindUserInLocation(filterUser: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5001/api/User/find`, filterUser
    );
  }
}
