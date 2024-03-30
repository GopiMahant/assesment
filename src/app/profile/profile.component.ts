import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formData: any; // Declare formData property to hold the form data

  constructor() { }

  ngOnInit(): void {
    // Retrieve form data from state
    this.formData = history.state.formData;
    console.log('Form Data in Profile:', this.formData);
  }

}
