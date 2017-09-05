import {Injectable} from '@angular/core';
import{Subject}from 'rxjs/Subject';
import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes : Recipe[] = [
        new Recipe('A test Recipe1', 'This is simply Recipe', 'http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('Meat', 20)
        ]),
        new Recipe('A test Recipe2', 'This is simply Recipe', 'http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg', [
            new Ingredient('Meat', 2),
            new Ingredient('Buns', 2)
        ]),
        new Recipe('A test Recipe3', 'This is simply Recipe', 'http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg', [new Ingredient('Meat', 3)]),
        new Recipe('A test Recipe4', 'This is simply Recipe', 'http://www.pro-fitpersonaltraining.co.uk/Admin/Media/BlogImages/674/674.jpg', [new Ingredient('Meat', 4)])
    ];

    constructor(private slService : ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index : number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
}