import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Input()
  markdownContent: string = '';

  @Output()
  onChangeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChangeBiography(): void{
    this.onChangeMarkdown.emit(this.markdownContent);
  }

}
