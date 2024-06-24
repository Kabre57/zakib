import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  jobList: any[] = []; // Initialisez la variable jobList avec une valeur par défaut vide

  ngOnInit() {
    // Récupérez la liste des offres d'emploi depuis votre API ou tout autre source de données
    this.jobList = [
      { title: 'CHAUFFEUR D’ENGIN', company: 'Travail temporaire', location: "Côte d'Ivoire - Abidjan" },
      { title: 'PEINTRE', company: 'Travail temporaire', location: "Côte d'Ivoire - Abidjan" },
      // Ajoutez d'autres offres d'emploi ici
    ];
  }
}