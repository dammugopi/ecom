import { Component,   OnInit } from '@angular/core';
import { EcomserviceService } from '../ecomservice.service';
import { CartserviceService } from '../cartservice.service';
import { ToastrService } from 'ngx-toastr';
import { count } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{




  data1:any;
  searchvalue:any
  search:any;
  cart:any=[]
  itemsincart:number=0
  idarray:any=[]

  data:any
  constructor( private ecom :EcomserviceService ,private cartservice:CartserviceService , private toastr:ToastrService){

    this.ecom.getdata().subscribe((res:object) =>   {
    this.data=res
    console.log(res)
     
    this.display();
  })
  
  
      
     

  }
  ngOnInit(): void {
 
     
    
  }
  display(){
    this.data1=this.data;
    console.log( this.data1.categories)

    
      
    }

    men(){
      this.search='Men';
       
    }
    women(){
      this.search='Women';
    }
    kid(){
      this.search='Kids'
 
    }
    searchmethod(){
      this.search=this.searchvalue
      this.searchvalue=null

    }
    

    addCart(p:any){
      
      const obj:any={
        id:p[0],
        count:1,
        price:p[1],
        image:p[2],
        title:p[3]

      };
      if(this.isinarray(p[0])){
          // alert("Item Already in cart")
          this.toastr.warning("Item Already in Cart")
      } 
    else{
      this.idarray.push(p[0])
      console.log("added id"+p[0])
      this.cartservice.addtoCart(obj)
      this.toastr.success('Add to Cart',"Success")
      
       
      console.log("added obj" + this.cart)
    }
     
      
        

      console.log(this.itemsincart = this.idarray.length)

       

    }



    isinarray(p:any):boolean{

       for (let index = 0; index < this.idarray.length; index++) {
        
        
        if(p==this.idarray[index]){
          return true;
         }
       }
       
      return false;
    
    }
     
    
 

  }
