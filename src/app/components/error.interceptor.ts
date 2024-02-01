import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Gérer les erreurs 401 (non autorisé), rediriger vers la page de connexion par exemple
          // this.router.navigate(['/login']);
        }

        // Vous pouvez ajouter d'autres logiques de gestion d'erreur ici
        return throwError(error);
      })
    );
  }
}
