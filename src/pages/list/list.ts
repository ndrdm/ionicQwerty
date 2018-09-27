import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataForm} from "../../models/classes";
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {NgForm} from "@angular/forms";
import {AlertController} from "ionic-angular";
import index from "@angular/cli/lib/cli";
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {


  dataMock: DataForm[];
  @Input() listData: DataForm[];


  @Output() delete= new EventEmitter<number>()

  constructor(public navCtrl: NavController, private provider: MockDataProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
    this.dataMock=this.provider.getData()


  }

//TODO implementare il passaggio alla pagina "charts"
  sendQuery(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }



  deleteConfirm(index) {
    let confirm = this.alertCtrl.create({
      title: "Delete item?",
      message: 'Delete',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.dataMock.splice(index,1);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  deleteAll(){
    let confirm = this.alertCtrl.create({
      title: "Discard all?",
      message: '',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            for (let p = this.dataMock.length; p >= 0; p--) {
              this.dataMock.splice(p, 1);
            }

          }}
          ]
    });
    confirm.present();
  }



  getParams(form: NgForm) {
    //TODO
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }


}
