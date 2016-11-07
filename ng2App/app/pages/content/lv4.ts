import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

var filePath = "build/pages/content/sample.html";

@Component({
  templateUrl: 'build/pages/content/lv4.html'
})
export class Lv4 {

  constructor(private navController: NavController) {
  }

  view1() {
           InAppBrowser.open(filePath, '_blank', 'location=yes');
        }
}
