import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formMovie!: FormGroup;

  @Input()
  modelMovie!: movieDTO

  @Output()
  onSaveChanges: EventEmitter<movieCreationDTO> = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Action'},
    {key: 3, value: 'Comedy'},
    {key: 4, value: 'Romance'}
  ];

  selectedGenres: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.formMovie = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: ''
    })

    if(this.modelMovie !== undefined){
      this.formMovie.patchValue(this.modelMovie);
    }
  }

  onImageSelected(file: File){
    this.formMovie.get('poster')?.setValue(file);
  }

  changeMarkdown(content: string){
    this.formMovie.get('summary')?.setValue(content);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.formMovie.get('genresIds')?.setValue(genresIds);
    this.onSaveChanges.emit(this.formMovie.value);
  }

}
