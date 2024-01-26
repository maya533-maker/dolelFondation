import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/Donateur/dashboard/dashboard.component';
import { AcceuilComponent } from './components/Donateur/Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './components/Donateur/Apropos/a-propos/a-propos.component';
import { FondationsComponent } from './components/Donateur/fondations/fondations.component';
import { ContactComponent } from './components/Donateur/contact/contact.component';
import { CollecteComponent } from './collecte/collecte.component';
import { EditProfilComponent } from './components/Donateur/edit-profil/edit-profil.component';
import { TeamsComponent } from './components/teams/teams.component';


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
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
