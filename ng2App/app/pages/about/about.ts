import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

var filePath = "http://www.amazon.in/registry/wishlist/1NYIMSECVGTNH";

/*
  Generated class for the ContactPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {
  constructor(private nav: NavController) {}

  wishlist() {
           InAppBrowser.open(filePath, '_blank', 'location=yes');
        }
}
