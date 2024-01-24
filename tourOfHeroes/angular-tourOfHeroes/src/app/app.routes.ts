import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroDetailComponent},
    {path: '**', redirectTo: 'heroes'}
];
