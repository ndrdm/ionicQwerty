import {Component, EventEmitter} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {DataForm, Line, Machine, Parameter} from "../../models/classes";
import {NgForm} from "@angular/forms";
import {FormPage} from "../form/form";
import  {ListPage} from "../list/list";
import {ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {

  }






}
