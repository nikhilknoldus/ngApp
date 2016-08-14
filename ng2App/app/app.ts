import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar, AdMob } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { ContactPage } from './pages/contact/contact';
import { AboutPage} from './pages/about/about';

@Component({
  templateUrl: 'build/app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Index', component: Page1 },
      { title: 'References', component: Page2 },
      {title: 'Contact', component: ContactPage},
      {title:'About', component:AboutPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // var admobid = {};
      //    // select the right Ad Id according to platform
      //    if (/(android)/i.test(navigator.userAgent)) {
      //    admobid = { // for Android
      //      banner: 'ca-app-pub-5724383886840960/6005198717',
      //      interstitial: 'ca-app-pub-6869992474017983/1657046752'
      //    };
      //    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
      //    admobid = { // for iOS
      //      banner: 'ca-app-pub-5724383886840960/6005198717',
      //      interstitial: 'ca-app-pub-6869992474017983/7563979554'
      //    };
      //    } else {
      //    admobid = { // for Windows Phone
      //      banner: 'ca-app-pub-5724383886840960/6005198717',
      //      interstitial: 'ca-app-pub-6869992474017983/1355127956'
      //    };
      //    }
      //
      //    AdMob.createBanner({
      //    isTesting: true,
      //    autoShow: true
      //    });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
