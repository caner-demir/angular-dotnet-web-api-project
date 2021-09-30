import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  loadModel: movieTheaterDTO = { name: 'Armada, Ankara',
    latitude: 39.91255307199718, longitude: -327.19095218159515 };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  saveChanges(movieTheater: movieTheaterCreationDTO){
    console.log(movieTheater);
  }

}
