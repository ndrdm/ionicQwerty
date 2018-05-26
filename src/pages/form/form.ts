import {Component, EventEmitter, Output} from '@angular/core';
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
  selectedItem: any;
  lines: Line [];
  machines : Machine [];
  parameters: Parameter [];
  selectedLines: Machine;


  @Output() newItem = new EventEmitter<DataForm>()
  constructor(public navCtrl: NavController, private provider: MockDataProvider, public navParams: NavParams ) {
    this.selectedItem = navParams.get('item');
    this.lines = this.provider.getLinee();
    this.machines = this.provider.getMacchine();
    this.parameters = this.provider.getParametri();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }




  logForm(form: NgForm) {
    if (form.valid) {
      let newData = {
        line: form.value.line,
        machine: form.value.machine,
        parameter: form.value.params
      }


      alert(form.value.linea)
      alert(form.value.macchina)
      alert(form.value.params)
      this.newItem.emit(newData)

    }

  }


}
