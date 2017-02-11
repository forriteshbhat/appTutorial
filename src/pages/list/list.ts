import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

 myFavShop:string;

  constructor(public navCtrl: NavController, public navParams:NavParams) {


    this.myFavShop = this.navParams.get('sName');

    console.log("myFavShop :: ",this.myFavShop);

    
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ListPage');
  // }

}
