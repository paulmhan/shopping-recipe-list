import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(private reciperService: RecipeService,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params["id"];
          this.recipe=this.reciperService.getRecipe(this.id);
        }
      )
  }

  onAddToShoppingList(){
    this.reciperService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
