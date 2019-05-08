import { Ingredients } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredients[] = [
    new Ingredients("Apples", 5),
    new Ingredients("Tomatoes", 10)
  ];

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice())
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  } 

  addIngredients(ingredients: Ingredients[]){
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())
  }

  updateIngredient(index: number, ingredient: Ingredients){
    this.ingredients[index]= ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
