import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  };

  constructor(public appProvider: AppProvider, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }

  //获取幻灯片
  getSlides() {
    let params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    };

    this.appProvider.httpGet(AppGlobal.api.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.spinner = false;
    });
  }

  //获取分类
  getCategories() {
    this.appProvider.httpGet(AppGlobal.api.getCategories, {appTag: 'dress'}, rs => {
      console.debug(rs);
      this.categories = rs.data;
    });
  }

  //获取首页推荐列表
  getProducts() {
    this.appProvider.httpGet(AppGlobal.api.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    });
  }

  //商品详情
  goDetails(item) {
    console.log('go details...')
  }

}
