import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Tasty Schnitzel", 
            "A super tasty Schnitzel - just awesome!", 
            "https://www.curiouscuisiniere.com/wp-content/uploads/2060/09/German-Pork-Schnitzel-9121-1200.jpg",
            [
                new Ingredient("Meat",1),
                new Ingredient("French Fries", 20)
            ]),
        new Recipe(
            "Big Fat Burger", 
            "What else do you need to say?", 
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1382541460839.jpeg",
            [
                new Ingredient("Meat",1),
                new Ingredient("French Fries", 20),
                new Ingredient("Buns", 2),
                new Ingredient("Cheese", 1),
            ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        //slice only gives us a copy of the recipes
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    
}

