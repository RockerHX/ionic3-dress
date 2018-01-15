import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppProvider, AppGlobal } from '../../providers/app/app';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  hasmore = true;
  products: any;
  selectedItem: any;

  spinner = true;

  params = {
    pageNo: 1,
    favoritesId: 0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider) {
    this.selectedItem = this.navParams.get("item");
    this.params.favoritesId = this.selectedItem.FavoritesId;
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }
  
  getFavoritesItems() {
    this.appProvider.httpGet(AppGlobal.api.getProducts, this.params, d => {
      this.products = d.data;
      this.params.pageNo += 1;
      this.spinner = false;
    });
  }

  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }
    this.appProvider.httpGet(AppGlobal.api.getProducts,this.params, d => {
      if (d.data.length > 0) {
        this.products = this.products.concat(d.data);
        this.params.pageNo += 1;
      } else {
        this.hasmore = false;
        console.log("没有数据啦！")
      }
      infiniteScroll.complete();
    });
  }

}
