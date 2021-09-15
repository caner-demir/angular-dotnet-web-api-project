import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO);
    
    this.router.navigate(['/genres']);
  }

}
