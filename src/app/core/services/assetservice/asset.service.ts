import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpClient: HttpClient) { }
  GetAsset(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Asset/find`,filter
    );
  }
}
