import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Lines, Macchine, Parametri} from "../../models/classes";

/*
  Generated class for the ProviderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockDataProvider {

  linee: Lines[]= [

    { id: 1,
  name: 'linea 1',
  macchine: 'macchina1'
    },
    { id: 2,
      name: 'linea 1',
      macchine: 'macchina1'
    },

    { id: 3,
      name: 'linea 1',
      macchine: 'macchina1'
    }

    ];

  macchine: Macchine []= [

  {id: 1,
    name: 'dea',
    line: 'ew',
    parametri: "temperatura"
  },

    {id: 2,
      name: 'dea',
      line: 'ew',
      parametri: "temperatura"
    },

    {id: 3,
      name: 'dea',
      line: 'ew',
      parametri: "temperatura"
    }
    ];


  parametri : Parametri[]= [

    {id: 1,
      name: 'temperatura',
      unita: '°C'
    },

    {id: 1,
      name: 'temperatura',
      unita: '°C'
    },

    {id: 2,
      name: 'consumo',
      unita: 'ampere'
    },

    {id: 3,
      name: 'quantità',
      unita: 'unità'
    }

    ]

  constructor(public http: HttpClient) {
    console.log('Hello ProviderDataProvider Provider');
  }

  getLinee(){
    return this.linee;

  }


  getMacchine(){
    return this.macchine;

  }

  getParametri(){
    return this.parametri;

  }

}
