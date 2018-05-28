import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataForm} from "../../models/classes";
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {NgForm} from "@angular/forms";



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {


  dataMock: DataForm[];

  @Input() listData: DataForm[];



  @Output() delete= new EventEmitter<number>()

  constructor(public navCtrl: NavController, private provider: MockDataProvider) {
    this.dataMock=this.provider.getData()
  }



  removeItem(index){
    console.log(index)
    this.dataMock.splice(1,index);
    this.delete.emit(index)
  }


  getParams(form: NgForm) {
    //TODO
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }


}
