import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  public stateSelected$ = new BehaviorSubject<any>({});
  public assignedDateSelected$ = new BehaviorSubject<any>({});
  public searchKey$ = new BehaviorSubject<any>({});
  constructor(private httpClient: HttpClient) { }

  GetAssignment(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Assignment/find`,filter
    );
  }
  RequestReturningAssignment(assignment : any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Request/`,assignment
    );
  }
  DisableAssignment(assignmentId : any): Observable<any> {
    return this.httpClient.delete<any>(
      `https://localhost:5011/api/Assignment/${assignmentId}`
    );
  }
  GetFilter() : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/GetFilterAssetAsync`
    );
  }
  // delete: (id) => {
  //   const url = `api/Assignment/${id}`;
  //   return amoClient.delete(url);
  // },
}
