import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ApiService } from '../api.service';
import { DataShareService } from '../service/dataShare.service';

@Component({
  selector: 'app-show-ingred',
  templateUrl: './show-ingred.component.html',
  styleUrls: ['./show-ingred.component.scss']
})
export class ShowIngredComponent implements OnInit {

  constructor( private api:ApiService,public modalRef: MDBModalRef,public dataShareService:DataShareService) {
      console.log(dataShareService.reciepeValue);
    
   }

  ngOnInit(): void {
    
  }

}
