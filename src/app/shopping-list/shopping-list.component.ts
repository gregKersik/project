import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription, Subject } from 'rxjs';


@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShopingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredients[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        console.log(ingredients);
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
