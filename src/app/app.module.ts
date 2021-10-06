import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ShowIngredComponent } from './show-ingred/show-ingred.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { AppRoutingModule } from './app-routing.module';
  
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { DataShareService } from './service/dataShare.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowIngredComponent,
    ShowRecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [ApiService,DataShareService],
  bootstrap: [AppComponent],
  entryComponents: [ ShowIngredComponent ]
})
export class AppModule { }
