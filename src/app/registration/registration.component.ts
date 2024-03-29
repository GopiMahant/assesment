import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  showRegistrationForm: boolean = false; // Property to control visibility of the registration form

  // Define registerForm object with initial values
  registerForm: any = {
    firstName: '',
    age: 18,
    interest: '',
    photo: null,
    addressType: '',
    address1: '',
    address2: '',
    companyAddress1: '',
    companyAddress2: ''
  };

  // Method to open the registration form
  openRegistrationForm() {
    this.showRegistrationForm = true;
  }

  // Method to handle form submission
  onSubmit() {
    // Handle form submission logic here
    console.log(this.registerForm);
    // Reset the form after submission
    this.resetForm();
  }

  // Method to reset the form
  resetForm() {
    this.showRegistrationForm = false;
    this.registerForm = {
      firstName: '',
      age: 18,
      interest: '',
      photo: null,
      addressType: '',
      address1: '',
      address2: '',
      companyAddress1: '',
      companyAddress2: ''
    };
  }

  // Method to handle photo upload
  handlePhotoUpload(event: any) {
    // Handle photo upload logic here
  }

}
