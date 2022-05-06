import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
  providers: [RecipesService]
})
export class RecipelistComponent implements OnInit {

  recipelist:any[]=this.recipesService.getrecipes();

//   showlist(){
//   this.recipelist = this.recipesService.getrecipes();
// }

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

}
