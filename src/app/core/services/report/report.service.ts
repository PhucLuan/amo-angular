import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }
  //const config = {
  //headers: { Authorization: `Bearer ${JSON.parse(user).access_token}` },
  //responseType: 'blob'
  //};
  //   const handleClickExport = () => {
  //       axios.get(
  //         `${process.env.REACT_APP_API_URL_END_POINT}api/Report/ExportReport`,
  //         config
  //       )
  //           .then((response) => {
  //               const url = window.URL.createObjectURL(new Blob([response.data]));
  //               const link = document.createElement('a');
  //               link.href = url;
  //               link.setAttribute('download', 'AMOReport.xlsx');
  //               document.body.appendChild(link);
  //               link.click();
  //           }).catch(e => console.log(e));
  //   }
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
