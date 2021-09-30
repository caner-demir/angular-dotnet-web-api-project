import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate.model';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.scss']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formTheater!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<movieTheaterCreationDTO> = new EventEmitter<movieTheaterCreationDTO>();

  @Input()
  loadMovieTheater!: movieTheaterDTO;

  loadCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.formTheater = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }]
    });

    if(this.loadMovieTheater !== undefined){
      this.formTheater.patchValue(this.loadMovieTheater);
      this.loadCoordinates.push({latitude: this.loadMovieTheater.latitude,
        longitude: this.loadMovieTheater.longitude});
    }
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.formTheater.patchValue(coordinates);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.formTheater.value);
  }

}
