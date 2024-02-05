import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  image!: File;
  telephone: string = "";

  // Propriétés spécifiques au formulaire de donateur
  firstName: string = "";

  // Propriétés spécifiques au formulaire de fondation
  numeroEnregistrement: string = "";
  adresse: string = "";
  description: string = "";

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  signIn() {
    if (this.emailLogin === "" || this.passwordLogin === "") {
      this.alertMessage("error", "Attention", "Merci de renseigner tous les champs");
    } else {
      this.authService.signIn(this.emailLogin, this.passwordLogin).subscribe(
        (response: any) => {
          console.log('Utilisateur connecté:', response);

          const role = response.role;
          const authToken = response.token;

          console.log('Rôle de l\'utilisateur:', role);
          console.log('Token d\'authentification:', authToken);

          this.authService.handleSignInSuccess(role);
        },
        (error: any) => {
          this.alertMessage("error", "Erreur de connexion", "Vérifiez vos identifiants et réessayez.");
        }
      );
    }
  }

  // Méthode pour effectuer une requête authentifiée
  performAuthenticatedRequest() {
    const authToken = this.authService.getAuthToken();

    if (authToken) {
      console.log('Token actuel:', authToken);

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      });

      this.http.get('votre_url', { headers }).subscribe(response => {
        console.log('Réponse de la requête:', response);
        // Traitez la réponse
      }, error => {
        console.error('Erreur lors de la requête:', error);
        // Traitez l'erreur
      });
    } else {
      console.error('Aucun jeton disponible.');
      // Gérez le cas où le jeton n'est pas disponible
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
    };

    const newUser = new FormData();
    newUser.append('image', this.image as Blob);
    newUser.append('nom' ,this.name);
    newUser.append('prenom',this.firstName);
    newUser.append('email',this.emailSignUp);
    newUser.append('password',this.passwordSignUp);
    newUser.append('telephone',this.telephone);
    newUser.append('role',this.selectedRole);
    newUser.append('description',this.description);
    newUser.append('numeroEnregistrement',this.numeroEnregistrement);
    newUser.append('adresse',this.adresse);

    if (this.selectedRole === 'donateur') {
      this.authService.signUpDonateur(newUser).subscribe(
        (response: any) => {
          console.log("je suis vide pour le moment🥱:", response);
          const role = response.data.role;
          this.authService.handleSignInSuccess(role);
          this.alertMessage("success","inscription réussie!!","🎉");
        },
        (error: any) => {
          console.error("si y'a erreur signale toi:", error);
          this.alertMessage("error", "Erreur d'inscription", "Vérifiez vos informations et réessayez.");
        }
      );
    } else if (this.selectedRole === 'fondation') {
      this.authService.signUpFondation(newUser).subscribe(
        (response: any) => {
          const role = response.role;
          this.authService.handleSignInSuccess(role);
          this.alertMessage("success","inscription réussie!!","🎉");
        },
        (error: any) => {
          this.alertMessage("error", "Erreur d'inscription", "Vérifiez vos informations et réessayez.");
        }
      );
    }
  }




  // Bloquer un donateur par l'administrateur
  blockDonor(donorId: number): void {
    this.authService.blockDonor(donorId).subscribe(
      (response: any) => {
        console.log('Donateur bloqué avec succès:', response);
      },
      (error: any) => {
        console.error('Erreur lors du blocage du donateur:', error);
      }
    );
  }

  // Débloquer un donateur par l'administrateur
  unblockDonor(donorId: number): void {
    this.authService.unblockDonor(donorId).subscribe(
      (response: any) => {
        console.log('Donateur débloqué avec succès:', response);
      },
      (error: any) => {
        console.error('Erreur lors du déblocage du donateur:', error);
      }
    );
  }

  // Bloquer une fondation par l'administrateur
  blockFoundation(foundationId: number): void {
    this.authService.blockFoundation(foundationId).subscribe(
      (response: any) => {
        console.log('Fondation bloquée avec succès:', response);
      },
      (error: any) => {
        console.error('Erreur lors du blocage de la fondation:', error);
      }
    );
  }

  // Débloquer une fondation par l'administrateur
  unblockFoundation(foundationId: number): void {
    this.authService.unblockFoundation(foundationId).subscribe(
      (response: any) => {
        console.log('Fondation débloquée avec succès:', response);
      },
      (error: any) => {
        console.error('Erreur lors du déblocage de la fondation:', error);
      }
    );
  }

  // Supprimer un utilisateur (donateur ou fondation) par l'administrateur
  deleteUser(userId: number): void {
    this.authService.deleteUser(userId).subscribe(
      (response: any) => {
        console.log('Utilisateur supprimé avec succès:', response);
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      }
    );
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

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
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
