import {Component, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {DataForm, Lines, Macchine, Parametri} from "../../models/classes";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  linee : Lines [];
  macchine : Macchine [];
  parametri: Parametri [];
  dataForm: DataForm;

  data:[  {
    linea: string,
    macchina: string,
    parametri: string[]
  }]

  constructor(public navCtrl: NavController, private provider: MockDataProvider) {
    this.linee = this.provider.getLinee();
    this.macchine = this.provider.getMacchine();
    this.parametri = this.provider.getParametri();
  }

  logForm(form: NgForm) {
    if (form.valid) {
      this.data = [{
        linea: form.value.linea,
        macchina: form.value.macchina,
        parametri: form.value.params
      }]
      alert(form.value.linea)
      alert(form.value.macchina)
      alert(form.value.params)
    }
  }

  resetConverter() {
    this.linee = null;
    this.macchine = null;
    this.parametri = null;
  }
}
