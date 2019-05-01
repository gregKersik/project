import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  private recipe: Recipe;
  private id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +this.route.snapshot.params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  toShopingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
