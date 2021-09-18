import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  loadModel: genreCreationDTO = {name: 'Drama'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  saveChanges(genreCreationDTO: genreCreationDTO){

  }

}
