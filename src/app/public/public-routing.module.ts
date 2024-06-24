import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ReferencesComponent } from './pages/references/references.component';
import { OffresComponent } from './pages/offres/offres.component';
import { DetailOffresComponent } from './pages/detail-offres/detail-offres.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'DetailOffres', component: DetailOffresComponent},
 
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
