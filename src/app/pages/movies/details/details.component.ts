import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails(){
    this.route.queryParams.subscribe(params => {
      const id = params['movieId'];
      this.movieService.getMovieDetails(id)
        .subscribe(result => {
          this.movie = result.data;
          console.log(this.movie);
        })
    })
  }
}
