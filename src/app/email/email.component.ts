import { Component } from '@angular/core';
import { RegistrationDialogService } from '../registration-dialog.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  constructor(private registrationDialogService: RegistrationDialogService) { }

  openRegistrationFormDialog(): void {
    this.registrationDialogService.openRegistrationFormDialog();
  }

}
