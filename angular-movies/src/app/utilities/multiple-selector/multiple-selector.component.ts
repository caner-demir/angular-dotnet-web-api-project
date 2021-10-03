import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  selectedItems: multipleSelectorModel[] = [];

  @Input()
  nonSelectedItems: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  select(item: multipleSelectorModel, index: number){
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index, 1);
  }

  deSelect(item: multipleSelectorModel, index: number){
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index, 1);
  }

  selectAll(){
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems = [];
  }

  deSelectAll(){
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }
}
