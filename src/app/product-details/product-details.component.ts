import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers:[MessageService]
})
export class ProductDetailsComponent implements OnInit {
  productDetails!:any;
  cartDetails:any=[];
  indivijualProduct:any;
  productVisibility=true;
  pageTitle='';
  constructor(private productService : ProductService,
    private messageService: MessageService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  viewDetails(data:any){
    this.productVisibility=false;
   this.indivijualProduct=data;
  }
  back(){
    this.productVisibility=true;
    this.pageTitle='';
  }
  getProducts(){
     this.productService.getProductDetails().subscribe((data)=>{
      this.productDetails = data;
      this.productVisibility=true;
      this.pageTitle='';
    })
  }
  addToCart(data:any){
   this.cartDetails.push(data);
   this.messageService.clear();
   this.messageService.add({
    severity: 'success',
    summary: 'Note',
    detail: 'Added to Cart Successfully!',
  });
  this.back();
  }
  userCartDetails(){
    this.pageTitle='My Cart';
     this.productVisibility=true;
    this.productDetails=this.cartDetails;
  }
  logout(){
    this.router.navigate(['/register'], { replaceUrl: true });
  }
}
