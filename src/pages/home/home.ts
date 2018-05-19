import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {Lines, Macchine, Parametri} from "../../models/classes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  linee : Lines [];
  macchine : Macchine [];
  parametri: Parametri [];


  constructor(public navCtrl: NavController, private provider: MockDataProvider) {
    this.linee = this.provider.getLinee();
    this.macchine=this.provider.getMacchine();
    this.parametri=this.provider.getParametri();
  }



}
