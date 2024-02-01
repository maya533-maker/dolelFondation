import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AcceuilComponent } from './components/Donateur/Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './components/Donateur/Apropos/a-propos/a-propos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { CollecteComponent } from './collecte/collecte.component';
import { EtapeComponent } from './components/Donateur/etape/etape.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dash', component: DashComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fondations', component: FondationsComponent },
  { path: 'teams', component: TeamsComponent },
  {path:'details',component:DetailsfondationComponent},
  {path:'profil',component:ProfilComponent},
  {path:'page',component:PageComponent},
  {path:'list',component:ListFondationsComponent},
  {path:'history',component:HistoriqueComponent},
  {path:'detail',component:DtlComponent},
  {path:'fond',component:DashComponent},
  {path:'abonne',component:AbonneComponent},
  {path:'don',component:DonComponent},
  {path:'collecte',component:CollecteComponent},
  {path:'etape',component:EtapeComponent},
  {path:'col',component:CollecteComponent},
  {path:'dashboard',component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
