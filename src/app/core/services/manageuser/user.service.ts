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

  CreateUser(user: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5001/api/User`, user
    );
  }
  GetUserById(userId: any): Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5001/api/User/${userId}`
    );
  }
//   put: (id, user) => {
//     const url = `api/User/${id}`;
//     return axiosClient.put(url,user)
// },
UpdateUser(id : any,user: any): Observable<any> {
  return this.httpClient.put<any>(
    `https://localhost:5001/api/User/${id}`, user
  );
}
}
