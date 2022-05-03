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

  public asset$ = new BehaviorSubject<any>({});
  public user$ = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) { }

  GetAssignment(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Assignment/find`, filter
    );
  }
  RequestReturningAssignment(assignment: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Request/`, assignment
    );
  }
  DisableAssignment(assignmentId: any): Observable<any> {
    return this.httpClient.delete<any>(
      `https://localhost:5011/api/Assignment/${assignmentId}`
    );
  }
  GetFilter(): Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/GetFilterAssetAsync`
    );
  }
  FindAssetAvailable(filterAsset: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Asset/find/available`, filterAsset
    );
  }
  GetAssignmentById(assignmentId: any): Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Assignment/${assignmentId}`
    );
  }
  FindUserInLocation(filterUser: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5001/api/User/find`, filterUser
    );
  }
  // post: (assignment) => {
  //   const url = `api/Assignment`;
  //   return amoClient.post(url, assignment);
  // },

  // put: (id, assignment) => {
  //   const url = `api/Assignment/${id}`;
  //   return amoClient.put(url, assignment);
  // },
  CreateAssignment(assignment: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Assignment`, assignment
    );
  }
  UpdateAssignment(assignmentId : any,assignment: any): Observable<any> {
    return this.httpClient.put<any>(
      `https://localhost:5011/api/Assignment/${assignmentId}`, assignment
    );
  }
}
