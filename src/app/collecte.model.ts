export class Collecte {
  // Les propriétés de votre modèle Collecte (titre, description, image, objectifFinancier, numeroCompte, etc.)
  id: number;
  titre: string;
  description: string;
  image !: File;
  objectifFinancier: number;
  numeroCompte: string;
  statut?: 'En cours' | 'Cloturée';
  cloturee: boolean = false;


  constructor() {
    // Initialisation des propriétés si nécessaire
    this.id = 0;
    this.titre = '';
    this.description = '';
    this.image;
    this.objectifFinancier = 0;
    this.numeroCompte = '';
  }


}
