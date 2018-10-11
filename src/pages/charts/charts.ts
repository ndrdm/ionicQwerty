import {Component, Input} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {DataValue} from "../../models/classes";


@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})


export class ChartsPage {

 // lineChartData: any;
  dataValueTemperatura: DataValue[];
  dataValueNumeroPezzi: DataValue[];
  @Input() listData: DataValue[];


  constructor(public navCtrl: NavController, private provider: MockDataProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
    //this.lineChartData=this.provider.getData();
    //console.log(this.lineChartData);

  }


//VERNICIATURA
  public lineChartData1:Array<any> = [ //temperatura
    {data: [67, 55, 58, 63, 60, 72, 65], label: 'Verniciatura Prima Mano'},
    {data: [77, 75, 73, 77, 76, 79, 75], label: 'Verniciatura Seconda Mano'}
  ];

  public lineChartData2:Array<any> = [//umidità
    {data: [42, 40, 45, 45, 48, 49, 47], label: 'Verniciatura Prima Mano'},
    {data: [42, 42, 42, 45, 42, 42, 42], label: 'Verniciatura Seconda Mano'}
  ];


  //FORNI
  public lineChartData3:Array<any> = [ //Temperatura
    {data: [40, 45, 48, 48, 48, 42, 45], label: 'Forno Riscaldamento'},
    {data: [77, 75, 73, 77, 76, 79, 75], label: 'Forno Cottura'},
    {data: [12, 17, 12, 12, 11, 13, 12], label: 'Forno Raffreddamento'}
  ];


  public lineChartData4:Array<any> = [ //umidità
    {data: [30,45, 48, 48, 48, 42, 45], label: 'Forno Riscaldamento'},
    {data: [45,45, 48, 48, 48, 42, 45], label: 'Forno Cottura'},
    {data: [20,45, 48, 48, 48, 42, 45], label: 'Forno Raffreddamento'}
  ];

  public lineChartData5:Array<any> = [ //ventilatore
    {data: [129], label: 'Forno Riscaldamento'},
    {data: [100], label: 'Forno Raffreddamento'}
  ];

  public lineChartData6:Array<any> = [ //carico/scarico
    {data: [10,11,13,14,15], label: 'Motore 1'},
    {data: [20,21,19,19,16], label: 'Motore 2'}
  ];

  public lineChartData7:Array<any> = [ //amperometro
    {data: [29,29,30,30,32], label: 'Forno Riscaldamento'},
    {data: [25,26,24,25,25], label: 'Forno Cottura'},
    {data: [10,20,30,20], label: 'Forno Raffreddamento'}
  ];


  //CARICO/SCARICO

  public barChartData1:any[] = [
    {data: [65,70,73,35], label: 'Motore 1'},
    {data: [28,25,25,24,23], label: 'Motore 2'}
  ];


  public lineChartData:Array<any> = [
    {data: [67, 55, 58, 63, 60, 72, 65], label: 'Sensore 1'},
    {data: [77, 75, 73, 77, 76, 79, 75], label: 'Sensore 2'},
    {data: [55, 60, 61, 56, 55, 54, 55], label: 'Sensore 3'},
    {data: [25, 20, 21, 26, 25, 24, 25], label: 'Sensore 4'},
  ];
  public lineChartLabels:Array<any> = ['10:00:00','10:15:00','10:30:00','10:45:00'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { //color1
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { //color2
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // color 3
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels:string[] = ['10:00:00','10:15:00','10:30:00','10:45:00'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '2017'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '2018'}
  ];

  public lineChartLegend:boolean = true;

  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData1.length);
    for (let i = 0; i < this.lineChartData1.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData1[i].data.length), label: this.lineChartData1[i].label};
      for (let j = 0; j < this.lineChartData1[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }

    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() *
        100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData1));
    clone[0].data = data;
    this.barChartData1 = clone;

    this.lineChartData1 = _lineChartData;
  }

// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

}
