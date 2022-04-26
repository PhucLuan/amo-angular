import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignmentItem } from '../../models/assignment-item';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  // getSampleData(
  //   sort: string,
  //   order: SortDirection,
  //   page: number,
  //   q: string
  // ): Observable<GithubApi> {
  //   return this.httpClient.get<GithubApi>(
  //     `https://api.github.com/search/issues?q=${q}&sort=${sort}&order=${order}&page=${
  //       page + 1
  //     }`
  //   );
  // }
  GetDataByUserId(userid: string): Observable<AssignmentItem[]> {
    return this.httpClient.get<AssignmentItem[]>(
      `https://localhost:5011/api/Assignment/user/${userid}`
    );
  }

  AcceptAssignment(assignmentId : string): Observable<any> {
    return this.httpClient.put<any>(
      `https://localhost:5011/api/Assignment/accept/${assignmentId}`,""
    );
  }

  DeclineAssignment(assignmentId : string): Observable<any> {
    return this.httpClient.delete<any>(
      `https://localhost:5011/api/Assignment/${assignmentId}`
    );
  }

  RequestReturningAssignment(assignment : any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Request/`,assignment
    );
  }
}
