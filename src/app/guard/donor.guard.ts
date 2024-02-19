import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../components/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DonorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUserRole() === 'donateur') {
      return true; // Autoriser l'accès si l'utilisateur est un donateur
    } else {
      // Rediriger vers la page d'accueil ou une autre page non autorisée
      this.router.navigate(['/acceuil']);
      return false;
    }
  }
}
