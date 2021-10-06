import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MDBModalService } from 'angular-bootstrap-md';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../api.service';
import { DataShareService } from '../service/dataShare.service';
import { ShowIngredComponent } from '../show-ingred/show-ingred.component';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit,AfterViewInit {


  name :any;
    dataItem: any = []
    item: any = {}
    recipes: any[] = []
    errorMessage:any;
    @ViewChild('basicModal') modal; 

  constructor(private api: ApiService, public http: HttpClient,
    private modalService: MDBModalService,
    private dataShareService:DataShareService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    //for loader timing
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);



    
    this.api.display().subscribe((item: any) => {
            //console.log(item);
            console.log(item.hits);
            // this.item = item
            this.item = item
            this.recipes = item.hits
        });



        
    
  }

  ngAfterViewInit() {
    console.log("*********************");
    
    console.log("*********************");

    if(this.recipes.length === 0)
    {
        this.errorMessage = "RESULTS NOT FOUND";
    }

  }

  openModal(recipe:any) {
    
    this.dataShareService.reciepeValue = recipe;
    this.modalService.show(ShowIngredComponent)
  }
}