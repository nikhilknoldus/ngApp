import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Ng1 } from "../content/ng1";
import { Ng4 } from "../content/ng4";
import { Ng6 } from "../content/ng6";
import  { Ng3 } from "../content/ng3";
import { Ng2 } from "../content/ng2";
import { Ng5 } from "../content/ng5";

import { Lv1 } from "../content/lv1";
import { Lv2 } from "../content/lv2";
import { Lv3 } from "../content/lv3";
import { Lv4 } from "../content/lv4";
import { Lv5 } from "../content/lv5";
import { Lv6 } from "../content/lv6";

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

  ng5(){
    this.navController.push(Ng5);
  }
  //dependencies, package json
  ng6(){
    this.navController.push(Ng6);
  }

//level 1
  lv1(){
    this.navController.push(Lv1);
  }

//level 2
  lv2(){
    this.navController.push(Lv2);
  }

//level 3
  lv3(){
    this.navController.push(Lv3);
  }

  //level 4
    lv4(){
      this.navController.push(Lv4);
    }
  //level 5
    lv5(){
      this.navController.push(Lv5);
    }
  //level 6
    lv6(){
      this.navController.push(Lv6);
    }
}
