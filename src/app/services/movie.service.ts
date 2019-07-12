import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovies } from '../models/iMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string ='';
  private apiKey: string= '1ea78298';
  constructor(private http: HttpClient) { }

  // metodo para buscar las peliculas
  searchMovies(title: string, type: string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<IMovies>(this.url).pipe(map(results => results['Search']));
  }

  // Metodo para ver el detalle de cada pelicula
  getDetails(id:string) {
    return this.http.get<IMovies>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
