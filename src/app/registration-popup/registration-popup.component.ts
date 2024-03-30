import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.css']
})
export class RegistrationPopupComponent implements OnInit {
  registrationForm!: FormGroup;
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 20 // Default age
  };

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationPopupComponent>
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      
      photo: [null, Validators.required] // Initialize with null
    });
  }



  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.formData = {
        ...this.formData,
        ...this.registrationForm.value
      };
      console.log('Form submitted:', this.formData);
      this.closeDialog();
    }

    const formData = this.registrationForm.value;
    console.log('Form submitted:', formData);

    // Navigate to profile page and pass form data
    this.router.navigate(['/profile'], { state: { formData: formData } });
   
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onPhotoChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Use optional chaining
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width === 310 && img.height === 325) {
            this.registrationForm.patchValue({
              photo: file
            });
          } else {
            this.registrationForm.get('photo')?.setErrors({ invalidSize: true }); // Use optional chaining
          }
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
