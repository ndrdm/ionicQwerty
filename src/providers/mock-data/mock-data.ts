import { Injectable } from '@angular/core';
import {DataForm, Line, Machine, Parameter} from "../../models/classes";

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
      machine: '°C',
      parameter:["1", "2"]
    },


    {
      line: 'prova2',
      machine: '°C',
      parameter:["1", "2"]
    }

  ]

  constructor() {
    console.log('Hello ProviderDataProvider Provider');
  }


  addData(data: DataForm){
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

}




