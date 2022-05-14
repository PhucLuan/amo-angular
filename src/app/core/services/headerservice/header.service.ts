import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public currentpath$ = new BehaviorSubject<any>({});
  constructor() { }
  GetTitle(value: string): string {
    if (value.includes('/assignment/EditAssignment')) return 'Assignment > Edit Assignment';
    if (value.includes('/asset/EditAsset')) return 'Asset > Edit Asset';
    if (value.includes('/user/EditUser')) return 'User > Edit User';
    switch (value) {
      case '/home':
        return 'Home';
      case '/user':
        return 'User';
      case '/asset':
        return 'Asset';
      case '/assignment':
        return 'Assignment';
      case '/request':
        return 'Request';
      case '/report':
        return 'Report';

      case '/assignment/CreateAssignment':
        return 'Assignment > Create New Assignment';
      case '/asset/CreateAsset':
        return 'Asset > Create New Asset';
      case '/user/CreateUser':
        return 'User > Create New User';

      default:
        return 'Home';
    }
  }
}
