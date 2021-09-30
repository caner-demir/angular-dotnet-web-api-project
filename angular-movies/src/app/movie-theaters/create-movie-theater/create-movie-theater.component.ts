import { Component, OnInit } from '@angular/core';
import { movieTheaterCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.scss']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: movieTheaterCreationDTO){
    console.log(movieTheater);
  }

}
