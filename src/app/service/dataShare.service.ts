import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  reciepe:any;
  constructor() { }
//Setting the recipe in the service using the recipe from the showRepice component 
  set reciepeValue(reciepe:any){
    this.reciepe = reciepe;
  }


//Getting 
  get reciepeValue(){
    return this.reciepe;
  }
}
