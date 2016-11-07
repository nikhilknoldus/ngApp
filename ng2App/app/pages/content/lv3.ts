import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

var filePath = "build/pages/content/sample.html";

@Component({
  templateUrl: 'build/pages/content/lv3.html'
})
export class Lv3 {

  constructor(private navController: NavController) {
  }
}
