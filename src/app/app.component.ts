import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AdvancedMaterialTableComponent } from './advanced-material-table/advanced-material-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdvancedMaterialTableComponent],
  template: `
    <app-advanced-material-table></app-advanced-material-table>
  `,
  styles: [],
})
export class AppComponent {
  title = 'advanced-angular-material-table';
}
