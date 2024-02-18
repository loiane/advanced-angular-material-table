import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ProductPage } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  loadProducts(page = 0, pageSize = 5) {
    return this.http.get<ProductPage>('http://localhost:3000/products',
      { params: { _page: page + 1, _per_page: pageSize } });
  }
}
