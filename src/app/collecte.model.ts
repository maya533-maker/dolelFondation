export class Collecte {
  id: number | undefined;
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
