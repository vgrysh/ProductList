import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';


@Component({
    selector: 'pm-app',
    template: `
    <div>
       <div><h1>Acme Product Management</h1></div>
       <pm-products></pm-products>
     </div>
     `,
     directives: [ProductListComponent],
     providers : [ProductService]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
