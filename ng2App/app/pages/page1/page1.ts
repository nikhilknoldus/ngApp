import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Ng1 } from "../content/ng1";
import { Ng4 } from "../content/ng4";
import { Ng6 } from "../content/ng6";

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(private navController: NavController) {
  }

  ng1(){
    this.navController.push(Ng1);
  }
  ng4(){
    this.navController.push(Ng4);
  }

  ng6(){
    this.navController.push(Ng6);
  }

}
