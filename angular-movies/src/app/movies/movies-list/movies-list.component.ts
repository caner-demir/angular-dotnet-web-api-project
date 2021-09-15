import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  @Input()
  movies;

  remove(index){
    this.movies.splice(index, 1);
  }

}
