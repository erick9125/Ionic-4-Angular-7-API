import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovies } from '../models/iMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // metodo para buscar las peliculas
  searchMovies() {

  }

  // Metodo para ver el detalle de cada pelicula
  getDetails() {

  }
}
