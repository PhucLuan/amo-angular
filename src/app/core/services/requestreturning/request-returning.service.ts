import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestReturningService {

  public stateSelected$ = new BehaviorSubject<any>({});
  public returnDateSelected$ = new BehaviorSubject<any>({});
  public searchKey$ = new BehaviorSubject<any>({});
  
  constructor(private httpClient: HttpClient) { }

  // find: (params) => {
  //   const url = 'api/Request/find';
  //   return amoClient.post(url, params)
  // },
  GetRequestReturning(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Request/find`, filter
    );
  }
}
