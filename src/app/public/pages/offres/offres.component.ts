import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent {
  isInMaintenance = true ;

  jobList = [
    { title: "CHAUFFEUR D'ENGIN", company: 'Travail temporaire', location: "Côte d'Ivoire - Abidjan" },
    { title: "PEINTRE", company: 'Travail temporaire', location: "Côte d'Ivoire - Abidjan" },
    { title: "Charpentier", company: 'Travail temporaire', location: "Côte d'Ivoire - Abidjan" }
  ];
}