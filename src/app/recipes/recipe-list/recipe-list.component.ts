import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe 1', 'test', 'https://c.pxhere.com/photos/34/55/salad_pig_iron_vegetables_kitchen_eating_food_eat_healthy-652796.jpg!d'),
    new Recipe('test recipe 2', 'test', 'https://c.pxhere.com/photos/34/55/salad_pig_iron_vegetables_kitchen_eating_food_eat_healthy-652796.jpg!d')
  ];

  @Output() recipeChosen = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeChosen(recipe: Recipe){
    this.recipeChosen.emit(recipe)
  }


}
