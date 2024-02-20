import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Comic } from '../Comic';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule, NgFor],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  public hero?: Hero;
  public heroComics?: Comic[];
  public selectedComic?: Comic;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {

  }
  public ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
  
    this.heroService.getHeroe(id).subscribe(hero => {
      this.hero = hero;
    });
  
    this.heroService.getComics(id).subscribe(comics => {
      this.heroComics = comics; 
    });
  }
    public showModal(comic: Comic): void {
      this.selectedComic = comic;
    }
  
    public hideModal(): void {
      this.selectedComic = undefined;
    }
  }

