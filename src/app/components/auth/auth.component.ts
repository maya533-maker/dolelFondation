import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isSignUpMode: boolean = false;
  selectedRole: string = '';
  showSignUpForm: boolean = false;

  // Propriétés communes aux deux types de formulaires
  emailLogin: string = "";
  passwordLogin: string = "";
  emailSignUp: string = "";
  passwordSignUp: string = "";
  name: string = "";
  image: string = "";
  telephone: string = "";

  // Propriétés spécifiques au formulaire de donateur
  firstName: string = "";

  // Propriétés spécifiques au formulaire de fondation
  numeroEnregistrement: string = "";
  adresse: string = "";
  description: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  signIn() {
    if (this.emailLogin === "" || this.passwordLogin === "") {
      this.alertMessage("error", "Attention", "Merci de renseigner tous les champs");
    } else {
      this.authService.signIn(this.emailLogin, this.passwordLogin).subscribe(
        (response: any) => {
          const role = response.role;
          this.authService.handleSignInSuccess(role);
        },
        (error: any) => {
          this.alertMessage("error", "Erreur de connexion", "Vérifiez vos identifiants et réessayez.");
        }
      );
    }
  }

  signUp() {
    const data = {
      nom: this.name,
      prenom: this.firstName,
      image: this.image,
      email:this.emailSignUp,
      password:this.passwordSignUp,
      telephone:this.telephone,
      role: this.selectedRole,


    }
    if (this.selectedRole === 'donateur') {
      this.authService.signUpDonateur(data).subscribe(
        (response: any) => {
          console.log("je suis vide pour le moment🥱:", response);
          const role = response.role;
          this.authService.handleSignInSuccess(role);
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          console.error("si y'a erreur signal toi:", error);
          this.alertMessage("error", "Erreur d'inscription", "Vérifiez vos informations et réessayez.");
        }
      );
    } else if (this.selectedRole === 'fondation') {
      this.authService.signUpFondation(
        this.name, this.emailSignUp, this.passwordSignUp, this.image, this.numeroEnregistrement, this.adresse, this.description, this.telephone
      ).subscribe(
        (response: any) => {
          const role = response.role;
          this.authService.handleSignInSuccess(role);
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          this.alertMessage("error", "Erreur d'inscription", "Vérifiez vos informations et réessayez.");
        }
      );
    }
  }


  checkIfDataReceived(response: any) {

    console.log("Nom:", response.name);
    console.log("Prénom:", response.firstName);
    console.log("Image:", response.image);
    console.log("Numéro de téléphone:", response.telephone);
    console.log("Email:", response.email);
    console.log("Mot de passe:", response.password);

    if (this.selectedRole === 'fondation') {
      console.log("Numéro d'enregistrement:", response.numeroEnregistrement);
      console.log("Mot de passe (fondation):", response.password); // ou utilisez le champ de mot de passe spécifique à la fondation
      console.log("Description:", response.description);
      console.log("Adresse:", response.adresse);
    }
  }

  continueToForm() {
    if (this.selectedRole) {
      this.showSignUpForm = true;
    }
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;

    if (!this.isSignUpMode) {
      this.selectedRole = '';
      this.showSignUpForm = false;
    }
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
