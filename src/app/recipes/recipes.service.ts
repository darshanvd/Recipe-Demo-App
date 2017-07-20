import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model'; 
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A test Recipe1','This is simply Recipe','http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg',[ new Ingredient('Meat',1),new Ingredient('Meat',20) ]),
        new Recipe('A test Recipe2','This is simply Recipe','http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg',[ new Ingredient('Meat',2), new Ingredient('Buns',2) ]),
        new Recipe('A test Recipe3','This is simply Recipe','http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg',[ new Ingredient('Meat',3) ]),
        new Recipe('A test Recipe4','This is simply Recipe','http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg',[ new Ingredient('Meat',4) ])
    ];

    constructor(private slService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}