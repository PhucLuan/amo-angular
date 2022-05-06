import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  GetReport(): Observable<any> {
    return this.httpClient.get<any>(
      `https://localhost:5011/api/Report`,
    );
  }
  ExportReport(): Observable<any> {
    return this.httpClient.get<any>(
      "https://localhost:5011/api/Report/ExportReport", {
        responseType: 'blob' as 'json'
    }
    );
  }

}
