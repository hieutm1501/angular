import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent {
  product: IProducts = {
    name: "",
    img: "",
    price: 0,
    priceOriginal: 0
  }
  constructor(private productService: ProductService) {

  }
  onHandleSubmit() {
    this.productService.getPost(this.product).subscribe(data => {
      console.log(data)
    })
  }
}
