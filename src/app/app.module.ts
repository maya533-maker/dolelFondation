import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcceuilComponent } from './components/Donateur/Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './components/Donateur/Apropos/a-propos/a-propos.component';
import { FondationsComponent } from './components/Donateur/fondations/fondations.component';
import { ContactComponent } from './components/Donateur/contact/contact.component';
import { EditProfilComponent } from './components/Donateur/edit-profil/edit-profil.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule } from '@angular/forms';
import { DetailsfondationComponent } from './components/Donateur/detailsfondation/detailsfondation.component';
import { PageComponent } from './components/Donateur/page/page.component';
import { ProfilComponent } from './components/Donateur/profil/profil.component';
import { ListFondationsComponent } from './components/Donateur/list-fondations/list-fondations.component';
import { HistoriqueComponent } from './components/Donateur/historique/historique.component';
import { AbonneComponent } from './components/Fondations/abonne/abonne.component';
import { DonComponent } from './components/Fondations/don/don.component';
import { DtlComponent } from './components/Donateur/dtl/dtl.component';
import { DashComponent } from './components/Fondations/dash/dash.component';
import { EtapeComponent } from './components/Donateur/etape/etape.component';
import { HttpClientModule } from '@angular/common/http';
import { DashAdComponent } from './components/Admin/dash-ad/dash-ad.component';
import { PageAdComponent } from './components/Admin/page-ad/page-ad.component';
import { DashfComponent } from './components/Fondations/dashf/dashf.component';
import { ListAdComponent } from './components/Admin/list-ad/list-ad.component';
import { AuthService } from './components/service/auth.service';
import { CollecteService } from './components/service/collecte.service';
import { TokenInterceptorProvider } from './components/token.interceptor';
import { FondationsListComponent } from './components/Admin/fondations-list/fondations-list.component';
import { DonateurListComponent } from './components/Admin/donateur-list/donateur-list.component';
import { CollecteListComponent } from './components/Admin/collecte-list/collecte-list.component';
import { ProfilFondComponent } from './components/Fondations/profil-fond/profil-fond.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailcolComponent } from './components/Fondations/detailcol/detailcol.component';
import { FondationsDetailsComponent } from './components/Fondations/fondations-details/fondations-details.component';
import { DetaildComponent } from './components/Donateur/detaild/detaild.component';
import { CollecteComponent } from './components/Donateur/fondations/collecte/collecte.component';
import { ListefondationAbonneComponent } from './components/Donateur/listefondation-abonne/listefondation-abonne.component';
import { FaireUnDonComponent } from './components/Donateur/faire-un-don/faire-un-don.component';
import { FondationListComponent } from './components/Donateur/fondation-list/fondation-list.component';
import { CollecteClotureComponent } from './components/Donateur/collecte-cloture/collecte-cloture.component';
import { AbonnenComponent } from './components/Fondations/abonnen/abonnen.component';
import { MaintenanceComponent } from './components/Fondations/maintenance/maintenance.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AuthComponent,
    DashboardComponent,
    AcceuilComponent,
    AProposComponent,
    FondationsComponent,
    ContactComponent,
    CollecteComponent,
    EditProfilComponent,
    TeamsComponent,
    DetailsfondationComponent,
    PageComponent,
    ProfilComponent,
    ListFondationsComponent,
    HistoriqueComponent,
    AbonneComponent,
    DonComponent,
    DtlComponent,
    DashComponent,
    EtapeComponent,
    DashAdComponent,
    PageAdComponent,
    DashfComponent,
    ListAdComponent,
    FondationsListComponent,
    DonateurListComponent,
    CollecteListComponent,
    ProfilFondComponent,
    DetailcolComponent,
    FondationsDetailsComponent,
    DetaildComponent,
    ListefondationAbonneComponent,
    FaireUnDonComponent,
    FondationListComponent,
    CollecteClotureComponent,
    AbonnenComponent,
    MaintenanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [AuthService, CollecteService, TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
