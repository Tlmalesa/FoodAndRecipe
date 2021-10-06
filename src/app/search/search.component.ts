import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    name :any;
    dataItem: any = []
    item: any = {}
    recipes: any[] = []

    constructor(private api: ApiService, public http: HttpClient,private router:Router) { }

    ngOnInit(): void {
    }

    submit(){
        this.api.search(this.name).subscribe((item: any) => {
            console.log(item.hits);
            this.item = item
            this.recipes = item.hits

            
                this.router.navigate(['/showRecipe']);
        });
    }

    
}
