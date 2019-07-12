import { IMovies } from './../../models/iMovies.interface';
import { MovieService } from './../../services/movie.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<IMovies>;
  term: string = ''; // termino de busqueda
  type: string = ''; // tipo de pelicula

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

searchChanged(): void {
  this.results = this.movieService.searchMovies(this.term, this.type);
}

}
