import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product';


@Component({
  selector: 'app-put-product',
  templateUrl: './put-product.component.html',
  styleUrls: ['./put-product.component.scss']
})
export class PutProductComponent {
  product: IProducts = {
    name: "",
    img: "",
    price: 0,
    priceOriginal: 0
  }
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getOne(id).subscribe(product => {
        this.product = product;
      })
    })
  }
  onHandleSubmit() {
    this.productService.getPut(this.product).subscribe(
      (data) => {
        // Sửa sản phẩm thành công, hiển thị thông báo và chuyển hướng đến trang khác
        alert('Sửa sản phẩm thành công');
        this.router.navigate(['/admin/dashboard'], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
        alert('Sửa sản phẩm thất bại');
      }
    );
  }
}
