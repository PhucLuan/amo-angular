import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = [
    'Category',
    'Total',
    'Assigned',
    'Available',
    'Not Available',
    'Waiting for recycling',
    'Recycle',
  ];
  data: any;
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.GetReport()
      .subscribe(
        x => {
          this.data = x
          console.log(x)
        }
      )
  }
  ExportReport() {
    this.reportService.ExportReport()
      .subscribe(
        response => {
          this.downloadFile(response)
        }
      )
  }
  private downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    window.open(url,'amoreport.xlsx');
  }
}
