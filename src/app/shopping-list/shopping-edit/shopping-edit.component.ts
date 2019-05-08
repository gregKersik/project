import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  @ViewChild('f') slForm: NgForm;

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;

          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          })
        }
      );
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);

    if (!this.editMode) {
      this.shoppingListService.addIngredient(newIngredient);
    }else{
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
