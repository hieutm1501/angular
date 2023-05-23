import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {

  }
  onHandleSubmit() {
    if (!this.isProductValid()) {
      return;
    }

    this.productService.getPost(this.product).subscribe(
      (data) => {
        alert('Thêm sản phẩm thành công')
        this.router.navigate(['/admin/dashboard'], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
        alert('Thêm sản phẩm thất bại');
      }
    );
  }

  isProductValid(): boolean {
    if (this.product.name.trim() === '') {
      alert('Vui lòng nhập tên sản phẩm');
      return false;
    }

    if (this.product.img.trim() === '') {
      alert('Vui lòng nhập đường dẫn hình ảnh sản phẩm');
      return false;
    }

    if (this.product.price <= 0) {
      alert('Vui lòng nhập giá sản phẩm');
      return false;
    }

    if (this.product.priceOriginal <= 0) {
      alert('Vui lòng nhập giá gốccủa sản phẩm');
      return false;
    }

    return true;
  }
}
