import { Component, OnInit } from '@angular/core';
import { EcomserviceService } from '../ecomservice.service';
import { Observable } from 'rxjs';
import { CartserviceService } from '../cartservice.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit  {

 
  data: any=[]
  data2:Array<any>=[]
  public product:any=[]
  public grandtotal:any

  constructor(private  cartservice:CartserviceService){
    
  }
   ngOnInit(): void {
     this.cartservice.getProducts().subscribe((res)=>{this.product=res
      console.log(this.product)
     })

     this.total(this.product)
    
    }
    

    increase(item:any){
        item.count++; 
        this.total(this.product)
        

    }
    decrease(item:any){
     item.count = item.count-1;
    
     this.total(this.product) 
     if(item.count<1){
      this.deleteitem(item)
     } 
    }
    
    
    total(products:any){
      var grandtotal=0
       for (const item of products) {

        grandtotal=grandtotal+item.count*item.price 
       }
       console.log(grandtotal)
       this.grandtotal=grandtotal
    }


    

    deleteitem(item: any) {
       this.cartservice.removeCartItem(item);
       this.total(this.product)
  
    }
    deleteall() {
      this.cartservice.removeAllCart()
      this.total(this.product)
       }


  


}
