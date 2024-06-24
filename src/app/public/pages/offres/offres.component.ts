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
      { title: 'Développeur Frontend', company: 'ABC Company', location: 'Paris' },
      { title: 'Designer UX/UI', company: 'XYZ Company', location: 'London' },
      // Ajoutez d'autres offres d'emploi ici
    ];
  }
}