import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  sub: any;
  constructor(private product: ProductService) { }
  ngOnInit(): void {
    // Code thiết lập khi component được khởi tạo
    this.product.getAll().subscribe(data => {
      this.sub = data
    })
  }

}
