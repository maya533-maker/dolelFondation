import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayTechService {

  private apiUrl = 'https://paytech.sn/payment/checkout/eey3kplsd3kn9d';
  private apiKey = '2da0011f368cd38b1755425ff9d44fa64fa91a1bbe0a617bf68b2d1541891c91';
  private apiSecret = '844786bd294eacf3490aa2e799c9e36b1bb3cbd3f64315c1d82a21bf69eff230';

  constructor(private http: HttpClient) { }

  initierPaiement(montant: number, message: string, titreCollecte: string, descriptionCollecte: string): Observable<any> {
    const endpoint = `${this.apiUrl}/payment/request-payment`;

    // Préparation des données de la demande de paiement
    const data = {
      item_name: titreCollecte,
      item_price: montant,
      ref_command: this.generateRefCommand(),
      command_name: descriptionCollecte,
      currency: 'XOF', 
      env: 'test',
      ipn_url: 'https://votresite.com/ipn',
      success_url: 'https://votresite.com/success',
      cancel_url: 'https://votresite.com/cancel',
      custom_field: JSON.stringify({ message })
    };

    // Préparation des en-têtes de la requête avec la clé API et la clé secrète
    const headers = new HttpHeaders()
      .set('API_KEY', this.apiKey)
      .set('API_SECRET', this.apiSecret);

    // Envoi de la demande de paiement à l'API PayTech
    return this.http.post(endpoint, data, { headers });
  }

  private generateRefCommand(): string {
    // Fonction pour générer une référence de commande unique
    return 'CMD_' + Math.random().toString(36).substr(2, 9);
  }
}
