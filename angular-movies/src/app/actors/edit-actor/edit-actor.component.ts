import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO, baseActor } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.loadModel = new actorDTO('Tom Holland', new Date(), 
      'https://m.media-amazon.com/images/M/MV5BOWQ3ZjNkY2MtZGVlMi00ZThhLTgwMWMtM2ZlZDQ4OTVmMjgzXkEyXkFqcGdeQXVyNjIzMDA2NjE@._V1_.jpg');
  }

  loadModel!: baseActor;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);
  }

}
