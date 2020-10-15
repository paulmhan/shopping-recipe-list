import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Test Recipe", "This is a test", "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg"),
        new Recipe("2 Test Recipe", "This is a test", "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg")
    ];

    getRecipes(){
        //slice only gives us a copy of the recipes
        return this.recipes.slice();
    }

    
}

