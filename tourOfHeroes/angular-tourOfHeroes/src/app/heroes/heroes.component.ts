import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';
import { HeroSearchComponentComponent } from '../hero-search-component/hero-search-component.component';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, UpperCasePipe, NgFor, NgIf, FormsModule, HeroSearchComponentComponent,RouterModule, MatButtonModule,MatListModule,MatTableModule ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]= [];
  currentPage = 1;
  limit = 20; 

  getHeroes(): void {
    const offset = (this.currentPage - 1) * this.limit;
    this.heroService.getHeroes(this.limit, offset)
        .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?:Hero;

  constructor(
    private heroService: HeroService, 
  ) { };


  public ngOnInit(): void {
    this.getHeroes();
    }
    nextPage(): void {
      this.currentPage++;
      this.getHeroes();
    }
  
    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getHeroes();
      }
    }
    
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
} 