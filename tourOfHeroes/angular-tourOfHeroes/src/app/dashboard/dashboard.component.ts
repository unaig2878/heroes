import { Component, EventEmitter, OnInit } from '@angular/core';
import { HeroSearchComponentComponent } from '../hero-search-component/hero-search-component.component';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeroSearchComponentComponent, NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  limit = 5; 
  currentSearchTerm: string = ''; 
  
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.currentSearchTerm = inputElement.value; 
    this.heroService.searchHeroes(this.currentSearchTerm)
    .subscribe(heroes => this.heroes = heroes.slice(0, 5));  
  }

  

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  

  getHeroes(): void {
  this.heroService.getTotal().subscribe(total => {
    let offset = Math.floor(Math.random() * total) + 1;
    this.heroService.getHeroes(this.limit, offset)
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  });
}


}
