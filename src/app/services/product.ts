import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/product';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = 'https://6469d92c03bb12ac2093d91b.mockapi.io/api'; // đặt biến này ở đây

    constructor(private http: HttpClient) { }
    getAll(): Observable<any> {
        return this.http.get<any>(`https://6469d92c03bb12ac2093d91b.mockapi.io/api/products`);
    }
    getOne(id: number): Observable<any> {
        return this.http.get<any>(`https://6469d92c03bb12ac2093d91b.mockapi.io/api/products/${id}`);
    }
    getPost(product: IProducts): Observable<any> {
        return this.http.post<IProducts>(`https://6469d92c03bb12ac2093d91b.mockapi.io/api/products`, product);
    }
    getPut(product: IProducts): Observable<any> {
        return this.http.put<IProducts>(`https://6469d92c03bb12ac2093d91b.mockapi.io/api/products/${product.id}`, product);
    }
    getDelete(id: number): Observable<any> {
        return this.http.delete<any>(`https://6469d92c03bb12ac2093d91b.mockapi.io/api/products/${id}`);
    }
}
