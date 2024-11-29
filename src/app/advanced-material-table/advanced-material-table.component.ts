import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { catchError, first, Observable, of, tap } from 'rxjs';

import { ProductPage } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-advanced-material-table',
    imports: [MatTableModule, MatPaginatorModule, AsyncPipe, MatSortModule],
    templateUrl: './advanced-material-table.component.html',
    styleUrls: ['./advanced-material-table.component.scss']
})
export class AdvancedMaterialTableComponent implements OnInit {

  productService = inject(ProductService);

  displayedColumns = ['name', 'category', 'price', 'stock', 'created', 'active'];

  products$!: Observable<ProductPage>;
  productPage: ProductPage = { data: [], items: 0 };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex = 0;
  pageSize = 5;

  ngOnInit() {
    this.refresh();
  }

  refresh(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 5 }, sort: Sort = {active: 'name', direction: 'asc'}) {
    console.log('refresh',sort);
    this.productService.loadProducts(pageEvent.pageIndex, pageEvent.pageSize, sort.active, sort.direction)
      .pipe(
        first(),
        tap(() => {
          this.pageIndex = pageEvent.pageIndex;
          this.pageSize = pageEvent.pageSize;
        }),
        catchError(() => {
          console.error('Error loading products.');
          return of({} as ProductPage);
        })
      ).subscribe((productPage: ProductPage) => {
        this.productPage = productPage;
      });
  }

  onSortChange(sort: Sort) {
    this.refresh({length: 0, pageIndex: 0, pageSize: this.pageSize}, sort);
  }

}
