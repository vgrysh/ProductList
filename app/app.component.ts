import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';


@Component({
    selector: 'pm-app',
    template: `
    <div>
       <div><h1>Acme Product Management</h1></div>
       <pm-products></pm-products>
     </div>
     `,
     directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
