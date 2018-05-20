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
    this.macchine=this.provider.getMacchine();
    this.parametri=this.provider.getParametri();
    this.data= [{
      linea: "",
      macchina:"",
      parametri:[""]
    }]
  }



  logForm(form: NgForm) {

    if (form.valid) {
      this.data = [{
        linea: form.value.linea.name,
        macchina: form.value.macchina.name,
        parametri: form.value.parametri.name,

      }]
    }
    alert(this.data)
  }





}
