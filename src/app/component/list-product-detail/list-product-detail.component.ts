import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-list-product-detail',
  templateUrl: './list-product-detail.component.html',
  styleUrls: ['./list-product-detail.component.scss']
})
export class ListProductDetailComponent {
  product: IProducts = {
    name: "",
    img: "",
    price: 0,
    priceOriginal: 0

  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getOne(id).subscribe(product => {
        this.product = product;
      })
    })
  }

}
