import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboarhHomeComponent } from './pages/admin/dashboarh-home/dashboarh-home.component';
import { DashboarhPostComponent } from './pages/admin/dashboarh-post/dashboarh-post.component';
import { DashboarhPutComponent } from './pages/admin/dashboarh-put/dashboarh-put.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'page', component: BaseLayoutComponent, children: [
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboarhHomeComponent },
      { path: "post", component: DashboarhPostComponent },
      { path: "put/:id", component: DashboarhPutComponent },

    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
