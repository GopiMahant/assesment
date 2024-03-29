// registration-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from './registration-popup/registration-popup.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDialogService {

  constructor(private dialog: MatDialog) { }

  openRegistrationFormDialog(): void {
    this.dialog.open(RegistrationPopupComponent, {
      width: '500px', // Set the desired width of the dialog
      // You can add more configuration options like height, position, etc.
    });
  }
}
