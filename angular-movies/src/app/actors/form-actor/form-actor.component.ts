import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTO, baseActor } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formActor!: FormGroup;

  @Input()
  modelActor!: baseActor;

  @Output()
  onSaveChanges: EventEmitter<actorCreationDTO> = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.formActor = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });

    if(this.modelActor !== undefined){
      this.formActor.patchValue(this.modelActor);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.formActor.value);
  };
  
  onImageSelected(image){
    this.formActor.get('picture')?.setValue(image);
  };

  onChangeMarkdown(content: string){
    this.formActor.get('biography')?.setValue(content);
  }

}
