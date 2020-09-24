import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  // returnUrl: string;
  // error: 
  // {
  //   errorTitle: '', errorDesc: ''
  // };
  loginError: string;
  constructor(
    private fb: FormBuilder,
    // private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.authService.logout();
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value); 
    if (this.authService.isLoggedIn()) {
      // const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
      // this.router.navigate([redirect]);
      console.log("your stored the data in local storage");
    }
   
   /*  this.authService.login(this.username.value, this.password.value).subscribe((data) => {
       if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    ); */
  }
}
