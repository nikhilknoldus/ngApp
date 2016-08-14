import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Ng1 } from "../content/ng1";


@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(private navController: NavController) {
  }

  ng1(){
    this.navController.push(Ng1);
  }
}
