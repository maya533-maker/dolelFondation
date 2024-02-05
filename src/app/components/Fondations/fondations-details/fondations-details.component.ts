import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollecteService } from '../../service/collecte.service';

@Component({
  selector: 'app-fondations-details',
  template: `
  <app-dashboard></app-dashboard>
    <div class="row" style="width: 100%;">
      <div class="component-18 w-100 mx-auto">
        <div class="group-513216">
          <img class="rectangle-374" src="https://s3-alpha-sig.figma.com/img/2fbb/eb01/c286e28a2491c77ebdf3b04f501d1d0b?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O07RHPbVusmEkPZFBBA0DyOYP6od6br04LYq-us~nw1Z25ExgVbK~OPLUh~UG0QlXidOcvLsAQIo85P56uibLRlwk-CWgipHH0Dk0U-utNiJ3aFwoQWc6hi-778Q2Mfr11f5vPybWDRUMvsM5o05UtY2t~Z4xEya1bYbOS45CUnRPD4UslAYwGQG~4WkZc5pi2gwpZrVFdtDMe2e2HeFED6av-3k-vVV-BZ4rHa-fJ~1all-FF3c0vGQ8HWBXV6~NOPHPMi6SqAwR4g0NgUh3ND1darKkc352SLABEdcSaU5CGGeXguNVXQ45vYswMnKOw22zhsa7cn2qDMosTErRg__" />
          <img class="ellipse-11" src="https://s3-alpha-sig.figma.com/img/849d/bf83/f2018b92b38ba9628328951aa97ad9bf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9mhlb8q0c2fSNeJuJCh-8tVXRHjCR~BUWzYe3P8NLV6mNpHNOrHoyje~Jzukzur4OEW9Hnul4oiLIvSrq-J5S~5ntr5ZaoOKYgvELN17aqDimraPzHx6YqnUpaU~foXea27n97RNBmEtB6z-Br7PeRRcSIeZP7yLxW2N705qJNXUt16DoOz68TRgWcp~Nq9mlXXEYrtx8ArU-ouLsYyIG-zWgiLly2wCLTfWGYC-lPxk~xsvyxnoEMpNiUauA-mPYUCpBckD3NkIAYVISUcriDCcLHXlkITMl6huKG0REMXPlJdH~Yfn~50-EAquY7N64OB-lhDxb~s7~pAEXO88w__" />
        </div>
        <div class="group-513211">
          <div class="component-17">
            <div class="rectangle-4471"></div>
            <button class="suivre btn" (click)="toggleSubscription()">
              {{ isSubscribed ? 'SE DÉSABONNER' : 'SUIVRE' }}
            </button>
          </div>
        </div>
      </div>

      <h1 class="text-center mt-3" style="color:#3B0458;font-weight: bold;">Qui sommes nous ?</h1>
      <div class=" mb-3 blocimagetext">
        <div class="row g-0 imagetext">
          <div class="col-md-4">
            <img src="https://s3-alpha-sig.figma.com/img/59e1/e021/c768facbad7a793a447caf066da202d2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLwZTKPPep7Zqa6MIWqCxlQzI-v9RUH6L3185X-CsKnjJ5KofelFlohfmqPL5EpTr1yKePrWYAQwsZzAUzjW9VG4WXANsPCuTMYRpP3ESBnDECWlgXWJYUF2wvpLDq5sA5j8jb~qOrrkFJ59DBsZyuDPWCz-80xIg~dab68oQvxE8knFFQUjWt6ftlIQTjluLUdyGOpxSQOmDyqrXLzEA84mtiZOdm6kJTYnHDC3hr8ukn2rcPXmHn4yoU8vMnGOLfOWi5TNm-elN2QOcZDtZ8yZMXT-sC7kj-re~ypsvOJEdxl6dTXrswBI56pPlY~PJ1uUUgjVWf9AZd5MCSC~PA__" class="img-fluid mx-auto d-block"   alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-title" style="color: white;line-height: 40px;font-size: 25px;">Les racines de l'espoir est une association humanitaire qui a pour mission de venir en aide aux personnes vulnérables et surtout redonner le sourire aux enfants malades et aux talibés. Lutter contre l'ichtyose congénital qui est une maladie rare.Un lendemain meilleur pour les enfants en éradiquant la mendicité des enfants et une meilleure prise en charge des enfants malades a l'avenir.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-center mt-3" style="color:#3B0458;font-weight: bold;opacity: 0;">Actualités</h1>
      <h1 class="text-center">Fondatrice</h1>
      <div class="blocaboutus ">
        <div class="col-md-4">
          <img src="https://s3-alpha-sig.figma.com/img/eedc/ced3/4e871f15fd4def4d149e0da0331cb014?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-kPpjJ88JG1cyZxC7A32RsOe2hPTdqkqr~psWhz-2uWHmI67Y8UcfalsPTBdsozmR~ON-F~qz581tLEspQewRb1WSeuO5KIwnJMeuw3JqVNWr~9VFWa2mUYGD03Lgj3i7n379uDODiinJlRcttfsGYos6UKcaGuy4XTdukJb6G1QPUhojOrCRq681xcelSgq8sq5Zg46OUSd9~9m8qGuYsxwO9K4fL~7lCEthA5pUS3vgBG5KjIs1kp9WQLb3~TKTu-TdBUIU0Z4gIFX2Y86D3z83JEACTAyiuf7wxmG85xuCHafnL9I-8bVaZeJDvfwt63i-W5~OR45m75P0HiyQ__" class="img-fluid rounded-start" alt="...">
        </div>

        <div class="d-flex">
          <div class="col-md-1 containerapropos ms-3"></div>
          <div class="col-md-7">
            <div class="card-body blocpresentation">
              <h5 class="card-title mt-3 text-center mx-5">Sophie Gueye
FONDATRICE</h5>
              <p class="card-text mt-3 ms-4">
Âgée de 29 ans , elle met en place une grande chaîne de solidarité dénommée Les Racines de l'espoir. C’est un rêve d’enfant qui est à l’origine de cette belle initiative. Sophie a toujours eu le cœur sur la main devant la détresse de son prochain. Devant les enfants démunis ou malades, elle ressent le besoin de soulager du mieux qu’elle peut leur peine.
  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div *ngFor="let collecte of collectes" class="card">
      <!-- Affichez les détails de la collecte ici -->
      <div class="title">{{ collecte.titre }}</div>
      <div class="description">{{ collecte.description }}</div>
      <div class="amount">{{ collecte.objectifFinancier | currency:'XOF':'symbol':'1.0-0' }}</div>
      <div class="account-number">Numéro de compte: {{ collecte.numeroCompte }}</div>
      <!-- Ajoutez un bouton ou un formulaire pour permettre au donateur de faire un don -->
      <button (click)="faireDon(collecte)">Faire un don</button>
    </div>
  `,
  styles: [`.component-18,
  .component-18 * {
    box-sizing: border-box;
  }
  .component-18 {
    width: 98%;
    display: flex;
    height: 637px;
    position: relative;
  }
  .group-513216 {
    position: absolute;
    inset: 0;
  }
  .rectangle-374 {
    position: absolute;
    right: 0%;
    left: 0%;
    width: 100%;
    bottom: 24.65%;
    top: 0%;
    height: 75.35%;
    object-fit: cover;
  }
  .ellipse-11 {
    border-radius: 50%;
    position: absolute;
    right: 73.47%;
    left: 4.51%;
    width: 21.7%;
    bottom: 0%;
    top: 58.24%;
    height: 41.76%;
  }
  .group-513211 {
    position: absolute;
    inset: 0;
  }
  .component-17 {
    position: absolute;
    right: 8.68%;
    left: 75.9%;
    width: 15.42%;
    bottom: 0%;
    top: 90.42%;
    height: 9.58%;
  }
  .rectangle-4471 {
    background: #f7e801;
    border-radius: 40px 0px 40px 0px;
    position: absolute;
    right: 0%;
    left: 0%;
    width: 100%;
    bottom: 0%;
    top: 0%;
    height: 100%;
  }
  .suivre {
    color: #ffffff;
    text-align: center;
    font-family: "Inter-Bold", sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    right: 22.07%;
    left: 22.07%;
    width: 55.86%;
    bottom: 26.23%;
    top: 5%;
    height: 49.18%;
  }

  /* section image texte */
  .blocimagetext{
    margin-top: 4%;
    margin-left: 5%;
    width: 90%;
  }
  .imagetext{
    background-color: #3B0458;
    border-right: 8px solid #F7E801;
    border-bottom: 8px solid #F7E801;
    border-radius: 0 65px 0 65px;
    padding: 25px;
  }
  .imagetext img{
    height: 280px;
    /* border: 2px solid; */
    /* margin-left: 5%; */
  }
  .imagetext h4{
    color: white;
    font-weight: bold;
    font-size: 35px;
    margin-left: 5%;
  }
  .imagetext p{
    font-size: 20px;
    margin-top: 4%;
    margin-left: 5%;
  }
  .div-group,
  .div-group * {
    box-sizing: border-box;
  }
  .div-group {
    background: #F7E801;
    border-radius: 8px;
    width: 384px;
    height: 224px;
    position: relative;
  }
  .div {
    width: 352px;
    height: 97px;
    position: absolute;
    left: 16px;
    top: 16px;
  }
  .heading-2-elegant-card {
    color: #3B0458;
    text-align: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 0px;
    top: 0px;
    /* width: 137.56px; */
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p-text-gray-200 {
    height: 57px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 40px;
    overflow: hidden;
  }
  .text {
    color: #000000;
    text-align: left;
    font-family: "Roboto-Regular", sans-serif;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    left: 0px;
    /* line-height: 40px; */
    top: 18px;
    width: 287.36px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .button-margin {
    width: 95.95px;
    height: 59px;
    position: absolute;
    left: 16px;
    top: 121px;
  }
  .button {
    background: #3B0458;
    border-radius: 4px;
    border-width: 2px;
    width: 95.95px;
    height: 35px;
    position: absolute;
    left: 0px;
    top: 24px;
  }
  .text4 {
    color: #ffffff;
    text-align: center;
    font-family: "Roboto-Regular", sans-serif;
    font-size: 13.300000190734863px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 21.97px);
    top: 10px;
    width: 43.95px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div-absolute {
    background: #3B0458;
    border-radius: 8px;
    position: absolute;
    right: -10.42%;
    left: 60.42%;
    width: 50%;
    bottom: -17.86%;
    top: 67.86%;
    height: 50%;
    box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.1),
      0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  /* présentation */
  .containerapropos{
    margin-top: 20%;
    background-color: #F7E801;
    height: 670px;
    width: 14.5% !important;
    border-radius: 0 80px 0 0;
    position: relative;
    right: -82px;
    top: -14px;
  }
  .blocaboutus{
    display: flex;
    grid-template-columns: auto auto;
    margin-left: 10%;
    margin-top: 2%;
  }
  .blocaboutus img{
    margin-top: 20%;
    height: 500px;
    width: 400px;
    border:2px solid #3B0458;
  }
  .blocpresentation{
    margin-top: 30%;
    background-color: #3B0458;
    height: 670px;
    width: 550px;
    border-radius: 0 0 70px 0;
    /* margin-left: 11%; */
  }
  .blocpresentation h5{
    color:#F7E801;
    font-size: 38px;
    padding: 4%;
  }
  .blocpresentation p{
    width:76%;
    margin-left: 17% !important;
    text-align: justify;
    color: white;
    font-size: 20px;
    /* border: 2px solid; */
  }
  `]
})
export class FondationsDetailsComponent implements OnInit {
  // fondationId!: number;
  fondationDetails: any;
  isSubscribed: boolean = false;
  fondationId!: number;
  collectes: any[] = []; // Assurez-vous de définir le type correct pour vos collectes

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private collecteService: CollecteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.fondationId = +params['id'];
      this.refreshCollectes();
    });
  }

  refreshCollectes() {
    this.collecteService.getCollectesParFondation(this.fondationId.toString()).subscribe(
      (response: any) => {
        this.collectes = response; // Assurez-vous que la structure de votre réponse correspond
      },
      (error) => {
        console.error('Erreur lors de la récupération des collectes :', error);
      }
    );
  }

  faireDon(collecte: any) {
    console.log(`Faire un don pour la collecte "${collecte.titre}"`);
    // Ajoutez ici la logique pour gérer le don (peut-être un formulaire de don)
  }

  toggleSubscription(): void {
    // Simulez l'action d'abonnement/désabonnement
    this.isSubscribed = !this.isSubscribed;
  }
}
