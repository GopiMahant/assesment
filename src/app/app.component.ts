import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from './registration-popup/registration-popup.component';
import { RegistrationDialogService } from './registration-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assesment';

  constructor(private registrationDialogService: RegistrationDialogService) { }

  openRegistrationFormDialog(): void {
    this.registrationDialogService.openRegistrationFormDialog();
  }
}
