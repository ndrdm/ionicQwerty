import { Injectable } from '@angular/core';
import {DataForm, DataValue, Line, Machine, Parameter} from "../../models/classes";

/*
  Generated class for the ProviderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockDataProvider {

  dataIn : DataForm[] =[];

  lines: Line [] = [ //SEZIONI

    {
      id: 1,
      name: 'Sezione Verniciatura',
      machine: 'macchina1'
    },
    {
      id: 2,
      name: 'Sezione Forni',
      machine: 'macchina1'
    },

    {
      id: 3,
      name: 'Sezione Trasportatore',
      machine: 'macchina1'
    }

  ];

  machines: Machine [] = [

  /*  {
      id: 1,
      lineId: 1,
      name: 'Verniciatura prima mano',
      line: '1',
      parameter: "temperatura"
    },

    {
      id: 2,
      lineId: 1,
      name: 'Verniciatura seconda mano',
      line: 'ew',
      parameter: "temperatura"//aggiungere umidità
    },*/

    {
      id: 3,
      lineId: 2,
      name: 'Forno Riscaldamento',
      line: 'ew',
      parameter: "temperatura" //umidità, ventilatore, amperometro
    },

    {
      id: 4,
      lineId: 2,
      name: 'Forno Cottura',
      line: 'ew',
      parameter: "temperatura" //umidità, ventilatore, amperometro
    },

    {
      id: 5,
      lineId: 2,
      name: 'Forno Raffreddamento',
      line: 'ew',
      parameter: "temperatura" //umidità, ventilatore, amperometro
    },

    /*{
      id: 6,
      lineId: 3,
      name: 'Carico/Scarico',
      line: '',
      parameter: "temperatura" //motore1, motore2
    }*/
  ];



  parameters: Parameter [] = [

    {
      id: 1,
      name: 'temperatura',
      unit: '°C'
    },

    {
      id: 1,
      name: 'umidità',
      unit: 'g/mc'
    },

    {
      id: 2,
      name: 'amperometro',
      unit: 'A'
    },

    {
      id: 3,
      name: 'quantità',
      unit: 'num'
    },

    {
      id: 4,
      name: 'ventilatore',
      unit: 'giri/min'
    }

  ]


  /*dataForm: DataForm [] = [

    {
      //line: 'Sezione Forni',
      name: "Forno Riscaldamento",
      value: ["1", "2"],
      /*startDate: "08/11/2017",
      startTime: "04:20:00",
      endDate: "08/11/2017",
      endTime: "04:20:00",
    },


    {
      //line: 'prova2',
      machine: 'Pompa',
      parameter: ["temperatura", "pressione"],
      /*startDate: "08/11/2017",
      startTime: "04:20:00",
      endDate: "08/11/2017",
      endTime: "04:20:00"
    }

  ]

  data=[{
    name:"nome",
    value:12

  }]

  /*
  data = [{
    "name": "machine1",
    "pressure": [
      {value: [65, 59, 80, 81, 56, 55, 40], label: 'Sensore1'},
      {value: [28, 48, 40, 19, 86, 27, 90], label: 'Sensore2'},
      {value: [18, 48, 77, 9, 100, 27, 40], label: 'Sensore3'}
    ],
    "temperature": [
      {value: [35, 10, 80, 81, 56, 55, 40], label: 'Sensore1'},
      {value: [8, 11, 19, 84, 20, 10, 87], label: 'Sensore2'}
    ],
    "qnty": [
      {data: [32, 48, 65, 73, 33, 11, 7], label: 'Sensore1'}
    ],

    "time": {
      "startTIme": "",
      "endTime": ""
    }
  },
    {
      "name": "machine2",
      "pressure": [
        {value: [65, 59, 80, 81, 56, 55, 40], label: 'Sensore1'},
        {value: [28, 48, 40, 19, 86, 27, 90], label: 'Sensore2'},
        {value: [18, 48, 77, 9, 100, 27, 40], label: 'Sensore3'}
      ],
      "temperature": [
        {value: [60, 59, 80, 81, 56, 55, 40], label: 'Sensore1'},
        {value: [60, 59, 80, 81, 56, 55, 40], label: 'Sensore2'}
      ],
      "piece": [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Sensore1'}
      ],

      "time": {
        "startTIme": "",
        "endTime": ""
      }
    }] */


  constructor() {
    console.log('Hello ProviderDataProvider Provider');
  }

  data=[{
    line: "Linea",
  machine: "Macchina",
  parameter: [1,2,3,4]

  }]

 /*addData(data: DataForm) {
    this.dataForm.push(data)

  } */

  getLinee() {
    return this.lines;

  }


  getMacchine() {
    return this.machines;

  }

  getParametri() {
    return this.parameters;

  }


  getSelectedData() {

  }



  getData(){
    return this.data;
  }

  setDataIn(data: DataForm){
    this.dataIn.push(data)
    console.log("ADSS" + this.dataIn)
  }

  getDataIn(): DataForm[]{
    return this.dataIn

  }

}




