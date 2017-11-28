import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../hero-mock'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Shaktiman'
  // }
  heroes= HEROES
  selectedHero: Hero
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
