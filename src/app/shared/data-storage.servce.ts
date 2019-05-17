import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorrageSevice {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      "https://ng-recipe-book-de715.firebaseio.com/ng-recipe-book.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes(){
      return this.http.get(
        "https://ng-recipe-book-de715.firebaseio.com/ng-recipe-book.json")
        .pipe(map(
            (recipes: Recipe[])=>{
                for(let recipe of recipes){
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
      .subscribe(
          (recipes: Recipe[]) => {
              console.log(recipes);
              this.recipeService.setRecipes(recipes);
              
          }
      )
  }
}
