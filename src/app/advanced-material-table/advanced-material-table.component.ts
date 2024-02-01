import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ProductService } from './product.service';

@Component({
  selector: 'app-advanced-material-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './advanced-material-table.component.html',
  styleUrls: ['./advanced-material-table.component.scss']
})
export class AdvancedMaterialTableComponent {

  productService = inject(ProductService);

  displayedColumns = ['name', 'category', 'price', 'stock', 'created', 'active'];

}
