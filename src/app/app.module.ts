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
import { CollecteComponent } from './collecte/collecte.component';
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
import { FondationComponent } from './components/Admin/fondation/fondation.component';
import { DtlComponent } from './components/Donateur/dtl/dtl.component';
import { DashComponent } from './components/Fondations/dash/dash.component';
import { EtapeComponent } from './components/Donateur/etape/etape.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

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
    FondationComponent,
    DtlComponent,
    DashComponent,
    EtapeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,],
  providers: [AuthService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
