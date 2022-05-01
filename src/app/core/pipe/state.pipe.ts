import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'statePipe',
})

export class StatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return 'Available';
      case 1:
        return 'Not Available';
      case 2:
        return 'Accepted';
      case 3:
        return 'Waiting for Accept';
      case 4:
        return 'Waiting For Recycle';
      case 5:
        return 'Recycled';
      case 6:
        return 'Assigned';
      case 7:
        return 'Completed';
      case 8:
        return 'WaitingForReturning';
    }
    //return null;
  }

}
