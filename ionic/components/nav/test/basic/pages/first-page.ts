import {IonicView, IonicConfig, IonicApp} from 'ionic/ionic';
import {NavParams, NavController} from 'ionic/ionic';

import {SecondPage} from './second-page';
import {ThirdPage} from './third-page';


@IonicView({
  template: '' +
    '<ion-navbar *navbar primary>' +
      '<ion-title>{{title}}</ion-title>' +
      '<ion-nav-items secondary>' +
        '<button>S1</button>' +
      '</ion-nav-items>' +
    '</ion-navbar>' +
    '<ion-content class="padding">' +
      '<p>{{title}}</p>' +
      '<p><button id="from1To2" primary (click)="push()">Push (Go to 2nd)</button></p>' +
      '<p><button [push-data]="pushData" [nav-push]="pushPage">Push w/ nav-push (Go to 2nd)</button></p>' +
      '<p><button (click)="setItems()">setItems() (Go to 3rd, no history)</button></p>' +
      '<icon class="ion-ios-arrow-back"></icon>' +
      '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' +
      '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' +
    '</ion-content>'
})
export class FirstPage {
  constructor(
    nav: NavController,
    app: IonicApp,
    config: IonicConfig
  ) {
    this.nav = nav;
    this.title = 'First Page';

    this.pushPage = SecondPage;
    this.pushData = {
      id: 420
    }
  }

  setItems() {
    let items = [
      ThirdPage
    ];

    this.nav.setItems(items);
  }

  // viewLoaded() {
  //   console.log('viewLoaded first page');
  // }

  // viewWillEnter() {
  //   console.log('viewWillEnter first page');
  // }

  // viewDidEnter() {
  //   console.log('viewDidEnter first page');
  // }

  // viewWillLeave() {
  //   console.log('viewWillLeave first page');
  // }

  // viewDidLeave() {
  //   console.log('viewDidLeave first page');
  // }

  // viewWillUnload() {
  //   console.log('viewWillUnload first page');
  // }

  // viewDidUnload() {
  //   console.log('viewDidUnload first page');
  // }

  push() {
    this.nav.push(SecondPage, { id: 8675309, myData: [1,2,3,4] } );
  }
}