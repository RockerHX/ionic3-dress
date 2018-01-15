import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'products',
  templateUrl: 'products.html'
})
export class ProductsComponent {
  @Input() products: Array<any>;

  constructor(public navCtrl: NavController) {
    console.log('Hello IonProducts Component');
  }

  goDetails(item) {
    console.log("sb");
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }

}

