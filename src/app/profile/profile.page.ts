import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  get Fname(){
    return this.profileForm.get('Fname');
  }

  get Lname(){
    return this.profileForm.get('Lname');
  }

  get email(){
    return this.profileForm.get('email');
  }

  get password(){
    return this.profileForm.get('password');
  }

  public errorMessages ={
    Fname: [
      { type: 'required', message: "First name is required"},
      { type: 'maxlength', message: "Please enter a valid name"}
    ],
    Lname: [
      { type: 'required', message: "Lastname is required"},
      { type: 'maxlength', message: "Please enter a valid name"}
    ],
    email: [
      { type: 'required', message: "Email is required"},
      { type: 'pattern', message: "Please enter a valid email address"}
    ],
    password: [
      { type: 'required', message: "Password is required"},
      { type: 'maxlength', message: "Please enter a valid password"}
    ]
  };

  profileForm = this.formBuilder.group({
    Fname: ['', [Validators.required, Validators.maxLength(100)]],
    Lname: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
    password: ['', [Validators.required, Validators.maxLength(100)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  public submit() {
    console.log(this.profileForm.value);
  }
  ngOnInit() {
  }

}
