import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);


  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }



  setProduct(product:any){
    this.cartItemList.push(...product)
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    console.log(this.cartItemList)

  }


  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

   


}
