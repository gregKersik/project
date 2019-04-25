import { Recipe } from "./recipe.model";
import { Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "test recipe 1",
      "test",
      "https://c.pxhere.com/photos/34/55/salad_pig_iron_vegetables_kitchen_eating_food_eat_healthy-652796.jpg!d",
      [
        new Ingredients('Vegi meat', 1),
        new Ingredients('French fries', 20),
      ]
    ),
    new Recipe(
      "test recipe 2",
      "test",
      "https://c.pxhere.com/photos/34/55/salad_pig_iron_vegetables_kitchen_eating_food_eat_healthy-652796.jpg!d",
      [
        new Ingredients('Buns', 2),
        new Ingredients('Tomato', 3),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //slice will return copy of the original array instance
  }


}
