import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AcceuilComponent } from './components/Donateur/Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './components/Donateur/Apropos/a-propos/a-propos.component';
import { ContactComponent } from './components/Donateur/contact/contact.component';
import { FondationsComponent } from './components/Donateur/fondations/fondations.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DetailsfondationComponent } from './components/Donateur/detailsfondation/detailsfondation.component';
import { PageComponent } from './components/Donateur/page/page.component';
import { ProfilComponent } from './components/Donateur/profil/profil.component';
import { ListFondationsComponent } from './components/Donateur/list-fondations/list-fondations.component';
import { HistoriqueComponent } from './components/Donateur/historique/historique.component';
import { DtlComponent } from './components/Donateur/dtl/dtl.component';
import { DashComponent } from './components/Fondations/dash/dash.component';
import { AbonneComponent } from './components/Fondations/abonne/abonne.component';
import { DonComponent } from './components/Fondations/don/don.component';
import { EtapeComponent } from './components/Donateur/etape/etape.component';
import { DashAdComponent } from './components/Admin/dash-ad/dash-ad.component';
import { PageAdComponent } from './components/Admin/page-ad/page-ad.component';
import { DonateurListComponent } from './components/Admin/donateur-list/donateur-list.component';
import { FondationsListComponent } from './components/Admin/fondations-list/fondations-list.component';
import { ProfilFondComponent } from './components/Fondations/profil-fond/profil-fond.component';
import { FondationsDetailsComponent } from './components/Fondations/fondations-details/fondations-details.component';
import { DetaildComponent } from './components/Donateur/detaild/detaild.component';
import { DashfComponent } from './components/Fondations/dashf/dashf.component';
import { CollecteComponent } from './components/Donateur/fondations/collecte/collecte.component';
import { ListefondationAbonneComponent } from './components/Donateur/listefondation-abonne/listefondation-abonne.component';
import { FaireUnDonComponent } from './components/Donateur/faire-un-don/faire-un-don.component';
import { FondationListComponent } from './components/Donateur/fondation-list/fondation-list.component';
import { CollecteClotureComponent } from './components/Donateur/collecte-cloture/collecte-cloture.component';
import { MaintenanceComponent } from './components/Fondations/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dash', component: DashComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fondations', component: FondationsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'details', component: DetailsfondationComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'page', component: PageComponent },
  { path: 'list', component: ListFondationsComponent },
  { path: 'history', component: HistoriqueComponent },
  { path: 'detail', component: DtlComponent },
  { path: 'fond', component: DashComponent },
  { path: 'abonne', component: AbonneComponent },
  { path: 'don', component: DonComponent },
  { path: 'collecte', component: CollecteComponent },
  { path: 'etape', component: EtapeComponent },
  { path: 'col', component: CollecteComponent },
  { path: 'dashAd', component: DashAdComponent },
  { path: 'pageAd', component: PageAdComponent },
  { path: 'listt', component: DonateurListComponent },
  { path: 'fondationl', component: FondationsListComponent },
  { path: 'profill', component:  ProfilFondComponent },
  { path: 'fdc', component:  FondationsDetailsComponent },
  { path: 'liste-collectes', component:  DetaildComponent },
  { path: 'dashf', component:  DashfComponent },
  { path: 'fondationabonne', component: ListefondationAbonneComponent },
  { path: 'donation', component:   FaireUnDonComponent},
  { path: 'listp', component:    FondationListComponent},
  { path: 'collectec', component:    CollecteClotureComponent},
  { path: 'maintenance', component: MaintenanceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
