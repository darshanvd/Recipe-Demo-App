import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipes.service';

@Component({selector: 'app-recipes-list', templateUrl: './recipes-list.component.html', styleUrls: ['./recipes-list.component.css']})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[];
  constructor(private recipeService : RecipeService, private router : Router, private route : ActivatedRoute) {}

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this
      .router
      .navigate(['new'], {relativeTo: this.route})
  }
}
