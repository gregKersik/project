import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredients[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        console.log(ingredients);
        this.ingredients = ingredients;
      }
    );
  }

}
