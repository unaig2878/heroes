import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-hero-search-component',
  standalone: true,
  imports: [NgFor, FormsModule, RouterModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './hero-search-component.component.html',
  styleUrl: './hero-search-component.component.css'
})
export class HeroSearchComponentComponent {
  
}
