import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ProductPage } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  loadProducts(page = 0, pageSize = 5, sort = '', direction = '') {
    let _sort: string = '';
    if (direction !== '') {
      _sort = direction === 'desc' ? '-' + sort: sort;
    }

    const params: any = { _page: page + 1, _per_page: pageSize };
    if (_sort !== '') {
      params._sort = _sort;
    }

    return this.http.get<ProductPage>('http://localhost:3000/products', { params });
  }
}
