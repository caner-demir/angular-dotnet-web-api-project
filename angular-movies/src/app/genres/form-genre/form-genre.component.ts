import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.scss']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  modelGenre!: genreCreationDTO

  formGenre!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.formGenre = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(2)]
      }]
    });

    if(this.modelGenre !== undefined){
      this.formGenre.patchValue(this.modelGenre);
    }
  }

  saveChanges(): void{
    this.onSaveChanges.emit(this.formGenre.value);
  }

  getErrorMessageFieldName(): string{
    const field = this.formGenre.get('name');

    if(field?.hasError('required')){
      return 'The Name field is required.';
    }

    if(field?.hasError('minlength')){
      return 'The Name field must be at least 2 characters in length.';
    }

    return '';
  }

}
