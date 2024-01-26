import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isSignUpMode: boolean = false;

  signIn() {
    // Implement sign-in logic here
    console.log('Sign in logic');
  }

  signUp() {
    // Implement sign-up logic here
    console.log('Sign up logic');
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }
}
