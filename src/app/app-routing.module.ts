import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AcceuilComponent } from './components/Donateur/Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './components/Donateur/Apropos/a-propos/a-propos.component';
import { DashboardComponent } from './components/Donateur/dashboard/dashboard.component';
import { ContactComponent } from './components/Donateur/contact/contact.component';
import { FondationsComponent } from './components/Donateur/fondations/fondations.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  // { path: '', redirectTo : 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent},
  { path: 'dash', component: DashboardComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'apropos', component: AProposComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'fondations', component: FondationsComponent},
  { path: 'teams', component: TeamsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
