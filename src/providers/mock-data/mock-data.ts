import { Injectable } from '@angular/core';
import {DataForm, DataValue, Line, Machine, Parameter} from "../../models/classes";

/*
  Generated class for the ProviderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockDataProvider {

  lines: Line []= [

    { id: 1,
  name: 'Verniciatura',
  machine: 'macchina1'
    },
    { id: 2,
      name: 'Forno',
      machine: 'macchina1'
    },

    { id: 3,
      name: 'Pompa',
      machine: 'macchina1'
    }

    ];

  machines: Machine []= [

    { id: 1,
      lineId: 1,
      name: 'Macchina 1 Vern.',
      line: 'ew',
      parameter: "temperatura"
    },

    {id: 2,
      lineId: 1,
      name: 'Macchina 2 Vern.',
      line: 'ew',
      parameter: "temperatura"
    },

    {id: 3,
      lineId: 2,
      name: 'Macchina 1 Forno',
      line: 'ew',
      parameter: "temperatura"
    },

    {id: 4,
      lineId: 2,
      name: 'Macchina 2 Forno',
      line: 'ew',
      parameter: "temperatura"
    },

    {id: 5,
      lineId: 3,
      name: 'Macchina 1 Pompa',
      line: 'ew',
      parameter: "temperatura"
    },

    {id: 6,
      lineId: 3,
      name: 'Macchina 1 Pompa',
      line: 'ew',
      parameter: "temperatura"
    }
  ];


  parameters : Parameter []= [

    {id: 1,
      name: 'temperatura',
      unit: '°C'
    },

    {id: 1,
      name: 'umidità',
      unit: '°C'
    },

    {id: 2,
      name: 'consumo',
      unit: 'ampere'
    },

    {id: 3,
      name: 'quantità',
      unit: 'unità'
    }

    ]


  dataForm : DataForm []= [

    {
      line: 'prova1',
      machine: 'Forno',
      parameter:["1", "2"],
      startDate:"08/11/2017",
      startTime: "04:20:00",
      endDate: "08/11/2017",
      endTime:  "04:20:00",
    },


    {
      line: 'prova2',
      machine: 'Pompa',
      parameter:["temperatura", "pressione"],
      startDate:"08/11/2017" ,
      startTime: "04:20:00",
      endDate: "08/11/2017",
      endTime:  "04:20:00"

    }


  ]

  dataValue : DataValue []= [

    {
      date: "08/11/2017",
      time: "04:20:00",
      value: 12
    },


    {

      date: "08/11/2017",
      time: "04:21:00",
      value: 15

    },

    {

      date: "08/11/2017",
      time: "04:22:00",
      value: 17

    },

    {

      date: "08/11/2017",
      time: "04:23:00",
      value: 12

    }
  ]
  t
  dataChartValue:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  dataChartTemperatura:Array<any> = [
    {data: [60, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  dataChartPressione:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];


  constructor() {
    console.log('Hello ProviderDataProvider Provider');
  }


  addData(    data: DataForm){
    this.dataForm.push(data)

  }

  getLinee(){
    return this.lines;

  }


  getMacchine(){
    return this.machines;

  }

  getParametri(){
    return this.parameters;

  }

  getData(){
    return this.dataForm
  }

  getSelectedData(){

  }


  getDataValue(){
    return this.dataValue;
  }


  getDataChartValue(){
    return this.dataChartValue;
  }

}




