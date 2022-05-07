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

  // delete: (id) => {
  //   const url = `api/Request/${id}`;
  //   return amoClient.delete(url)
  // },
  GetRequestReturning(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Request/find`, filter
    );
  }

  AcceptRequestReturning(requestId: any): Observable<any> {
    return this.httpClient.put<any>(
      `https://localhost:5011/api/Request/accept/${requestId}`,''
    );
  }

  CancelRequestReturning(requestId: any): Observable<any> {
    return this.httpClient.delete<any>(
      `https://localhost:5011/api/Request/${requestId}`
    );
  }
}
