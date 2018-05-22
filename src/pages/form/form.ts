import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {DataForm, Line, Machine, Parameter} from "../../models/classes";
import {MockDataProvider} from "../../providers/mock-data/mock-data";



@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  lines: Line [];
  machines : Machine [];
  parameters: Parameter [];
  dataForm: DataForm;
  selectedLines: Machine;

  data:[  {
    line: string,
    machine: string,
    parameter: string[]
  }]


  constructor(public navCtrl: NavController, private provider: MockDataProvider) {
    this.lines = this.provider.getLinee();
    this.machines = this.provider.getMacchine();
    this.parameters = this.provider.getParametri();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }


  logForm(form: NgForm) {
    if (form.valid) {
      this.data = [{
        line: form.value.line,
        machine: form.value.machine,
        parameter: form.value.params
      }]
      alert(form.value.linea)
      alert(form.value.macchina)
      alert(form.value.params)
    }
  }


}
