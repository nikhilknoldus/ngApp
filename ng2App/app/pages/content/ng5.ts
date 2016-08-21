import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { InAppBrowser } from 'ionic-native';


@Component({

  templateUrl: 'build/pages/content/ng5.html',
  providers: [InAppBrowser]

})

export class Ng5{

  constructor(private navController:NavController){}

  launch() {
           InAppBrowser.open('https://angular.io/docs/ts/latest/quickstart.html', '_blank', 'location=yes');
        }

     }
