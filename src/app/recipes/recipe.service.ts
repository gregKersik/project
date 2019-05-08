import { Recipe } from "./recipe.model";
import { Output } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "Oatmeal ",
      "The Perfect Breakfast!",
      "http://www.coolhealthyrecipes.com/wp-content/uploads/2014/10/oatmeal-with-fruit-600x600.jpg",
      [
        new Ingredients('Magic apple', 3),
        new Ingredients('Unicorn hair', 4),
      ]
    ),
    new Recipe(
      "Tasty Ice Pops",
      "Ice Pops to help you cool down this summer",
      "https://media.deseretdigital.com/file/36e2413298?resize=width_700&type=image/jpeg&c=6&a=2ec4b37e",
      [
        new Ingredients('Strawberry', 2),
        new Ingredients('Kombucha Berry', 3),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //slice will return copy of the original array instance
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }


}
