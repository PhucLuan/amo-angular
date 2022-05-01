import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public stateSelected$ = new BehaviorSubject<any>({});
  public categorySelected$ = new BehaviorSubject<any>({});
  public searchKey$ = new BehaviorSubject<string>('');
  constructor(private httpClient: HttpClient) { }

  GetAsset(filter: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Asset/find`,filter
    );
  }

  GetFilter() : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/GetFilterAssetAsync`
    );
  }

  GetHistoryAssignment(params: any) : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Assignment/Gethistory`,{params}
    );
  }

  IsAssetExitInAssignmentAsync(assetId: any) : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/IsAssetExitInAssignmentAsync/${assetId}`
    );
  }

  DeleteAsset(assetId: any) : Observable<any> {
    return this.httpClient.delete<any>(
      `https://localhost:5011/api/Asset/${assetId}`
    );
  }

  CreateAsset(asset: any) : Observable<any> {
    return this.httpClient.post<any>(
      `https://localhost:5011/api/Asset`,asset
    );
  }

  GetAssetById(assetId: any) : Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Asset/${assetId}`
    );
  }

  EditAsset(asset: any) : Observable<any> {
    return this.httpClient.put<any>(
      `https://localhost:5011/api/Asset`,asset
    );
  }
  // put: (asset) => {
  //   const url = `api/Asset`;
  //   return amoClient.put(url, asset)
  // }
}
