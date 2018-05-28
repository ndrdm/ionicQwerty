import {Component, EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {DataForm, Line, Machine, Parameter} from "../../models/classes";
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import { ToastController } from 'ionic-angular';
import * as moment from "moment";


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
  nowDate: Date;


  /*public event = {
    month: '2018-06-01',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  } */


  @Output() newItem = new EventEmitter<DataForm>()



  constructor(public navCtrl: NavController, private provider: MockDataProvider, public navParams: NavParams, public toastCtrl: ToastController ) {
    this.nowDate = new Date()
    let dataForm = moment(this.nowDate).format('DD MM YYYY') //('DD/MM/YYYY, h:mm a')

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
    if (form.value.linea!=undefined && form.value.macchina!=undefined && form.value.params!=undefined) {
      let newData = {
        line: form.value.linea,
        machine: form.value.macchina,
        parameter: form.value.params
      }
      this.dataMock.push(newData)
      form.reset()
      let toast = this.toastCtrl.create({
        message: 'OK! Aggiunti dati alla lista',
        duration: 5000
      });
      toast.present();
    }

      else{
      let toast = this.toastCtrl.create({
        message: 'ERRORE! I campi vuoti non sono ammessi',
        duration: 5000
      });
      toast.present();

    }


    }






}
