import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class HeroService {
 
  private baseUrl = 'https://gateway.marvel.com/v1/public/';
  private apiKey = 'b5b962eb639c945eb7edbf93e51c2049';
  private ts = 'patata';
  private hash = '07f3b6086a25c03387a77b9525c9656d';

  constructor(private http: HttpClient) { }

  public getHeroes(limit: number, offset: number): Observable<Hero[]> {
  const url = `${this.baseUrl}characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=${limit}&offset=${offset}`;
  return this.http.get<ApiResponse>(url).pipe(
    map(response => response.data.results as Hero[])
  );
}


public getHeroe(id: number): Observable<Hero> {
  const url = `${this.baseUrl}characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
  return this.http.get<ApiResponse>(url).pipe(
    map(response => response.data.results[0] as Hero)
  );
}

public searchHeroes(name: string): Observable<Hero[]> {
  const url = `${this.baseUrl}characters?nameStartsWith=${name}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
  return this.http.get<ApiResponse>(url).pipe(
    map(response => response.data.results as Hero[])
  );
}
public getTotal(): Observable<number> {
  const url = `${this.baseUrl}characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
  return this.http.get<ApiResponse>(url).pipe(
    map(response => response.data.total)
  );
}



}

interface ApiResponse {
  code: number;
  status: string;
  data: {
    total: number;
    results: Hero[];
  };
}

