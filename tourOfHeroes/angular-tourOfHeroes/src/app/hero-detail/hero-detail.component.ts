import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgIf } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService:HeroService
    ){
  
  }
  public ngOnInit(): void {
   /* console.log(this.route.snapshot.params['id']);
    const id = this.route.snapshot.params['id'];
    const heroes = this.heroService.getHeroes();
    this.hero = heroes.find(hero=>hero.id === +id);*/
  }
}
