import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  public stateSelected$ = new BehaviorSubject<any>({});
  public assignedDateSelected$ = new BehaviorSubject<any>({});
  public searchKey$ = new BehaviorSubject<string>('');
  constructor(private httpClient: HttpClient) { }

  GetAssignment(filter: any): Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Assignment/find`,{
        params:{filter},
        observe: 'response'
      }
    );
  }
}
