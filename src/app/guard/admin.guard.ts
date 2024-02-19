import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../components/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUserRole() === 'admin') {
      return true; // Autoriser l'accès si l'utilisateur est un administrateur
    } else {
      // Rediriger vers la page d'accueil ou une autre page non autorisée
      this.router.navigate(['/acceuil']);
      return false;
    }
  }
}
