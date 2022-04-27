import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public stateSelected$ = new BehaviorSubject<any>({});
  public categorySelected$ = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) { }

  GetAsset(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Asset/find`,filter
    );
  }
  // getFilter: () => {
  //   const url = `api/Asset/GetFilterAssetAsync`;
  //   return amoClient.get(url);
  // },
  GetFilter() : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/GetFilterAssetAsync`
    );
  }
}
