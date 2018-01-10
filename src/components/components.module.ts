import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular/module';

import { ProductsComponent } from './products/products';

@NgModule({
	declarations: [ProductsComponent],
	imports: [IonicModule],
	exports: [ProductsComponent]
})
export class ComponentsModule {}
