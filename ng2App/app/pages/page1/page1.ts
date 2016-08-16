import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Ng1 } from "../content/ng1";
import { Ng4 } from "../content/ng4";
import { Ng6 } from "../content/ng6";
import  { Ng3 } from "../content/ng3";
import { Ng2 } from "../content/ng2";


@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(private navController: NavController) {
  }

  // what is angularjs
  ng1(){
    this.navController.push(Ng1);
  }

  // what is angular js 2
  ng2(){
    this.navController.push(Ng2);
  }

 // angularjs 1 vs angularjs 2
  ng3(){
    this.navController.push(Ng3);
  }

  // angularjs 2 known issues
  ng4(){
    this.navController.push(Ng4);
  }

  //dependencies, package json
  ng6(){
    this.navController.push(Ng6);
  }

}
