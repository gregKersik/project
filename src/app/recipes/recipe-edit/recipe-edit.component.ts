import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
             ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  onSubmit(){
    if (this.editMode) { 
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  private initForm(){
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode == true) {
      this.recipe = this.recipeService.getRecipe(this.id);
      recipeName = this.recipe.name;
      imagePath = this.recipe.imagePath;
      description = this.recipe.description;
      if (this.recipe['ingredients']) {
        
        for(let ingredient of this.recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
            );
          }
          console.log(ingredients);
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients,
    });
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),

      }))
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
