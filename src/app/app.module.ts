import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FotterComponent } from './component/fotter/fotter.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderHomeComponent } from './component/header-home/header-home.component';
import { HeaderAdminComponent } from './component/header-admin/header-admin.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CriteriaFormComponent } from './component/criteria-form/criteria-form.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { DashboarhHomeComponent } from './pages/admin/dashboarh-home/dashboarh-home.component';
import { DashboarhPostComponent } from './pages/admin/dashboarh-post/dashboarh-post.component';
import { DashboarhPutComponent } from './pages/admin/dashboarh-put/dashboarh-put.component';
import { ListProductAdminComponent } from './component/list-product-admin/list-product-admin.component';
import { PostProductComponent } from './component/post-product/post-product.component';
import { PutProductComponent } from './component/put-product/put-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ListProductDetailComponent } from './component/list-product-detail/list-product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    FotterComponent,
    HeaderComponent,
    HeaderHomeComponent,
    HeaderAdminComponent,
    ProductListComponent,
    CriteriaFormComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    DashboarhHomeComponent,
    DashboarhPostComponent,
    DashboarhPutComponent,
    ListProductAdminComponent,
    PostProductComponent,
    PutProductComponent,
    ProductDetailComponent,
    ListProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ButtonModule,
    // TableModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
