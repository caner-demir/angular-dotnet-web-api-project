import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: "Spider Man",
      releaseDate: new Date(),
      price: 14.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      title: "Iron Man",
      releaseDate: new Date('2016-11-14'),
      price: 12.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg'
    }];
    this.moviesFutureReleases = [
/*       {
      title: "Avengers",
      releaseDate: new Date(),
      price: 14.49
      },
      {
      title: "Batman",
      releaseDate: new Date('2011-11-14'),
      price: 12.99
      } */
    ];
  }
 
  moviesInTheaters;
  moviesFutureReleases;

}
