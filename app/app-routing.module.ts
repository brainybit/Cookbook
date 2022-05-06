import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'recipelist', component:RecipelistComponent},
  {path: 'recipedetails', component:RecipedetailsComponent},
  {path: 'shoppinglist', component:ShoppinglistComponent},
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [RecipelistComponent,RecipedetailsComponent,ShoppinglistComponent];
