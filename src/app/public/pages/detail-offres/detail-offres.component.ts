import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-offres',
  templateUrl: './detail-offres.component.html',
  styleUrls: ['./detail-offres.component.css']
})
export class DetailOffresComponent {
    job = {
      type: 'Travail temporaire',
      location: 'Côte d\'Ivoire - Abidjan',
      description: `À partir des plans fournis par l'architecte ou qu'il aura réalisé lui-même, de plus en plus en 3D, le charpentier bois trace, en grandeur réelle, les formes de l'ouvrage à réaliser, avec les détails d'exécution. C'est l'épure. Ensuite, il choisit le bois en fonction de sa dureté et de ce qui est attendu, trace les repères sur le matériau, coupe et façonne les pièces à l'aide de machines (scie mécanique, raboteuse, toupie verticale…) et d'outils portatifs.
  
  Avec son équipe, il procède à un essai d'assemblage des éléments pour vérifier l'ensemble de l'ouvrage et apporte les corrections nécessaires. Une fois assuré de la solidité de son ouvrage, le charpentier bois organise le transfert, depuis l'atelier vers le chantier. C'est là qu'il monte et assemble la structure, aidé par son équipe, en respectant les règles de sécurité. Il maîtrise l'utilisation d'outillages à main mais aussi d'engins de levage et de manutention.
  
  Le charpentier bois ne fabrique pas que des charpentes. Il réalise aussi des lucarnes, des sous-pentes, des planchers, etc. et participe à la construction d'ouvrages tout en bois : hangars agricoles, chalets, escaliers, bateaux…`,
      qualifications: [
        'Savoir estimer les volumes et les dimensions',
        'Maîtriser la géométrie et le dessin industriel',
        'Savoir lire des plans et croquis',
        'Être précis et minutieux',
        'Avoir une connaissance pointue des matériaux',
        'Aimer travailler en équipe',
        'Être rigoureux en matière de sécurité',
        'Avoir une bonne résistance physique'
      ]
    };
  }