import { Recipe } from "./recipe.model";
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeWasSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('fries', 3),
                new Ingredient('fries', 3)
            ]
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('fries', 3),
                new Ingredient('fries', 3)
            ]
        ),
    ];
    listOfRecipes() {
        return this.recipes.slice();
    }
    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
