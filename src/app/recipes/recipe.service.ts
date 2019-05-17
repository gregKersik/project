import { Recipe } from "./recipe.model";
import { Output } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  

  getRecipes() {
    return this.recipes.slice(); //slice will return copy of the original array instance
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }


}
