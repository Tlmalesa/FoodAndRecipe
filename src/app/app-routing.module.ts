import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { ShowIngredComponent } from './show-ingred/show-ingred.component';



const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component:  SearchComponent},
  { path: 'showRecipe', component:  ShowRecipeComponent},
  { path: 'showIngrid', component:  ShowIngredComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})
export class AppRoutingModule { }
