import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(amount: string){
    this.ingredientAdded.emit({name: this.nameInputRef.nativeElement.value, amount: amount})
  }

}
