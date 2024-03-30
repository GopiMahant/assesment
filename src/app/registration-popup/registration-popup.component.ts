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
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      age: [20, [Validators.required, Validators.min(20), Validators.max(60)]],
      // Add other form controls here
      photo: [null, Validators.required] // For photo upload
    });
  }

  get f() { return this.registrationForm.controls; }


  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log('Form submitted:', formData);
      this.closeDialog();
      this.router.navigate(['/profile'], { state: { formData: formData } });
    }
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
