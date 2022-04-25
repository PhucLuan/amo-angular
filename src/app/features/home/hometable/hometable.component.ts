import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentItem } from 'src/app/core/models/assignment-item';
import { HomeService } from 'src/app/core/services/homeservice/home.service';
import { CheckbtnComponent } from 'src/app/shared/button/checkbtn/checkbtn.component';
import { ModalDetailInfoComponent } from 'src/app/shared/modal-detail-info/modal-detail-info.component';



interface DisplayItem {
  assetCode: string;
  assetName: string;
  assetSpecification: string;
  assignedTo: string;
  assignedBy: string;
  assignedDate: string;
  stateName: string;
  note: string;
}
@Component({
  selector: 'app-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.css']
})


export class HometableComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'assetCode',
    'assetName',
    'assignedDate',
    'stateName',
    'action'
  ];
  data: AssignmentItem[] = [];

  isOpenModalDetail: boolean = true;

  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //Binding button
  @ViewChild(CheckbtnComponent)

  private mychild!: CheckbtnComponent;
  private currentId: string = '';

  constructor(
    private appService: HomeService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          // console.log(this.sort.active);
          // console.log(this.sort.direction);
          // console.log(this.paginator.pageIndex);
          return (
            this.appService!.getData('d45119c7-6e65-47db-b947-bc0280e88394')
              // searchTerm && typeof searchTerm == 'string'
              //   ? searchTerm.toString()
              //   : 'repo:angular/components'
              //()
              .pipe(catchError(() => of(null)))
          );
        })
        // map((data) => {
        //   if (data === null) {
        //     return [];
        //   }

        //   this.resultsLength = data.totalPages;
        //   return data.items;
        // })
      )
      .subscribe((data: any) => (this.data = data));
  }

  // openSelected(datasource : any) {
  //   console.log(datasource);
  // }

  openDialog(datasource: DisplayItem): void {
    if (this.isOpenModalDetail) {
      let keyDisplayItem = ["Asset Code", "Asset Name", "Specification", "Assigned to", "Assigned by", "Assigned Date", "State", "Note"];

      let valueDisplayItem: DisplayItem = {
        assetCode: datasource.assetCode,
        assetName: datasource.assetName,
        assetSpecification: datasource.assetSpecification,
        assignedTo: datasource.assignedTo,
        assignedBy: datasource.assignedBy,
        assignedDate: datasource.assignedDate,
        stateName: datasource.stateName,
        note: datasource.note,
      }
      console.log(datasource)
      const dialogRef = this.dialog.open(ModalDetailInfoComponent, {

        data: {
          title: "Detailed Assignment Information",
          keys: keyDisplayItem,
          values: Object.values(valueDisplayItem)
        },
      });
    }
  }

  onClickYes(res: string) {
    console.log(res + "From Home cpn with id = " + this.currentId);
    this.myCallbackFunction();
    //this.checkButton.closeDialog();
  }
  myCallbackFunction = (): void => {
    //callback code here
    this.mychild.closeDialog();
  }

  onRowClick(assignmentId: string) {
    this.updateAssignmentId(assignmentId)
  }

  updateAssignmentId(assignmentId: string) {
    console.log("click btn")
    //this.dialog.closeAll();
    this.isOpenModalDetail = false;
    this.currentId = assignmentId;
    console.log("Id neee : " + this.currentId);
  }
  updateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
    console.log("afterclose modal")
  }
}

