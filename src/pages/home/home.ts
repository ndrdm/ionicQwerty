import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {Input} from "@angular/compiler/src/core";
import {Lines} from "../../models/classes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  linee : Lines;

  constructor(public navCtrl: NavController, private provider: MockDataProvider) {

  }




}
