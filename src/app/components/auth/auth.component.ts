import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isSignUpMode: boolean = false;
  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  emailLogin: string = "";
  passwordLogin: string = "";

  signIn() {
    // Implement sign-in logic here
    console.log('Sign in logic');
    if (this.emailLogin == "" || this.passwordLogin == "") {
      this.alertMessage("error", "Attention", "Merci de  renseigner tous les champs");
    } else if (!this.emailLogin.match(this.emailPattern)) {
      this.alertMessage("error", "Attention", "Merci de mettre un email correct");
    } else if (this.passwordLogin.length < 5) {
      this.alertMessage("error", "Attention", "Le mot de passe doit contenir plus de caractères");
    } else {
      this.alertMessage("error", "Oups!", "Le compte n'existe pas ou est désactivé");
    }
  }

  signUp() {
    // Implement sign-up logic here
    console.log('Sign up logic');
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500
    });
  }
}
