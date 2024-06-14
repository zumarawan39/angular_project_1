import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  name: string = "Ali";
  product = {
    phone: "Iphone15",
    age: 17,
    price: 4000,
    discount: 30,
    stock: 10,
    imgPath: "/assets/images/Fiverr Profile  Picture.png" 
  };

  getDiscount() {
    return this.product.price * this.product.discount / 100;
  }

  onChangeValue(event: any) {
    console.log(event);
    
   return this.name=event.target.value;   
  }
}
