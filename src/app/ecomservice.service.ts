import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcomserviceService {

  constructor( private http:HttpClient) {

   }
   getdata(){
   return this.http.get("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
   }


   

   


}
