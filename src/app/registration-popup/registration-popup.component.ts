import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrl: './registration-popup.component.css'
})
export class RegistrationPopupComponent {
  constructor(public dialogRef: MatDialogRef<RegistrationPopupComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
