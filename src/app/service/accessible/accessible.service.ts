import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from '../../component/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class AccessibleService {


  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  public showConfirm(message = 'حذف انجام شود؟'): Observable<any> {
    const sub = new Subject<any>();
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        Dialog: message,
        type: 'reports'
      },
    });
    dialogRef.afterClosed().subscribe(
      (data) => {
        sub.next(data);
        sub.complete();
      }
    );
    return sub;
  }

  showResultMessage(message) {
    this.snackBar.open(message, '', {
      direction: 'rtl',
      duration: 3000,
    });
  }


}
