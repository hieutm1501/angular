import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product';


@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.scss']
})
export class ListProductAdminComponent {
  sub: any;
  constructor(private product: ProductService) { }
  ngOnInit(): void {
    // Code thiết lập khi component được khởi tạo
    this.product.getAll().subscribe(data => {
      this.sub = data
    })
  }
  removeItem(id: any) {
    if (confirm('Bạn có muốn xóa sản phẩm này không?')) {
      // xoa API
      this.product.getDelete(id).subscribe(
        () => {
          // Xóa sản phẩm thành công, cập nhật danh sách sản phẩm
          this.sub = this.sub.filter((item: any) => item.id !== id);
          alert('Xóa sản phẩm thành công');
        },
        (error) => {
          console.log(error);
          alert('Xóa sản phẩm thất bại');
        }
      );
    }
  }
}
