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
  nowTime: string;
  nowDate: string;


  /*public event = {
    month: '2018-06-01',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  } */


  @Output() newItem = new EventEmitter<DataForm>()

  constructor(public navCtrl: NavController, private provider: MockDataProvider, public navParams: NavParams, public toastCtrl: ToastController ) {

    this.selectedItem = navParams.get('item');
    this.lines = this.provider.getLinee();
    this.machines = this.provider.getMacchine();
    this.parameters = this.provider.getParametri();
    this.dataMock=this.provider.getData();

    this.nowTime=moment().format('h:mm:ss')
    this.nowDate=moment().format('DD/MM/YYYY')

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
    let startDate;
    let startTime;
    let endDate;
    let endTime;



    if (form.value.linea!=undefined && form.value.macchina!=undefined && form.value.params!=undefined) {

      if(form.value.startDate==undefined){
        startDate=this.nowDate;
      }
      else {startDate=moment(form.value.startDate).format('DD/MM/YYYY')}


      if (form.value.startTime==undefined){
        startTime=this.nowTime;
      }
      else {startTime=form.value.startTime;}


      if (form.value.endDate==undefined){
        endDate=moment(form.value.endDate).format('DD/MM/YYYY');
      }
      else {endDate=form.value.endDate;}


      if (form.value.endTime==undefined){
        endTime=this.nowTime;
      }
      else {endTime=form.value.endTime;}



      //moment(form.value.startTime).format('RFC3339')

      let newData = {
        line: form.value.linea,
        machine: form.value.macchina,
        parameter: form.value.params,
        startDate:startDate,
        startTime:startTime,
        endDate:endDate,
        endTime: endTime

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
