import {Component, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {DataForm, Line, Machine, Parameter} from "../../models/classes";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lines: Line [];
  machines : Machine [];
  parametri: Parameter [];
  dataForm: DataForm;
  selectedLines: Machine;

  data:[  {
    line: string,
    machine: string,
    parameter: string[]
  }]

  constructor(public navCtrl: NavController, private provider: MockDataProvider) {
    this.linee = this.provider.getLinee();
    this.macchine = this.provider.getMacchine();
    this.parametri = this.provider.getParametri();
  }

  logForm(form: NgForm) {
    if (form.valid) {
      this.data = [{
        line: form.value.line,
        machine: form.value.machine,
        parameters: form.value.params
      }]
      alert(form.value.linea)
      alert(form.value.macchina)
      alert(form.value.params)
    }
  }





}
