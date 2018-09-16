import {Component, NgModule} from '@angular/core';
import {ProductsListComponent} from './components/products-list/products-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [ProductsListComponent]
})
export class AppComponent {
  title = 'angular-front';
}
