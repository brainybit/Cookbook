import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css'],
  providers: [RecipesService]
})
export class RecipedetailsComponent implements OnInit {

recipes:any[]=this.recipesService.getrecipes();


  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

}
