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
  data:DataForm;
  dataMock: DataForm[];



  @Output() newItem = new EventEmitter<DataForm>()

  constructor(public navCtrl: NavController, private provider: MockDataProvider, public navParams: NavParams ) {
    this.selectedItem = navParams.get('item');
    this.lines = this.provider.getLinee();
    this.machines = this.provider.getMacchine();
    this.parameters = this.provider.getParametri();
    this.dataMock=this.provider.getData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  addNewItem(item: DataForm){
    alert(item.machine)
    this.dataMock.push(item)
    //localStorage.setItem("key", JSON.stringify(this.itemCart))
  }

  addForm(form: NgForm) {
    if (form.valid) {
      let newData = {
        line: form.value.linea,
        machine: form.value.macchina,
        parameter: form.value.params
      }

      alert(form.value.linea)
      alert(form.value.macchina)
      alert(form.value.params)
      this.dataMock.push(newData)


    }


  }


}
