import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(amount: number){
    const ingName = this.nameInputRef.nativeElement.value;
    this.shoppingListService.addIngredient({name: ingName, amount: amount});
  }

}
