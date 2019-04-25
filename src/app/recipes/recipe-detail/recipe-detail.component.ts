import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shoping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  toShopingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
