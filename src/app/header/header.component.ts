import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorrageSevice } from "../shared/data-storage.servce";
import { Recipe } from '../recipes/recipe.model';
// import { DataStorrageSevice } from '../shared/data-storage.servce';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private dataStoregeService: DataStorrageSevice
  ) {}

  onSave() {
    this.dataStoregeService.storeRecipes().subscribe(res => {
      console.log(res);
    });
  }
  
  onFetch(){
      this.dataStoregeService.getRecipes();
  }
}
