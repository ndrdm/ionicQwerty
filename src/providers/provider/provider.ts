import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Lines, Macchine, Parametri} from "../../models/classes";



@Injectable()
export class Provider {

  linee: Lines[] = [
    { id:1,
      name: "Linea1",
      macchine: macchinari[]
    }
    ];

  macchinari: Macchine[] = [
    { id:1,
      name: "Verniciat;ura",
      line: "linea1",
      parametri: "",
    },
    { id:2,
      name: "Verniciatura",
      line: "linea1",
      parametri:""
    },
    { id:3,
      name: "Verniciatura",
      line: "linea1",
      parametri: ""
    },

  ];

  parametri: Parametri[] = [
    { id:1,
      name: "Verniciatura",
      unita:""
    },
    { id:2,
      name: "Verniciatura",
      unita:""
    },
    { id:3,
      name: "Verniciatura",
     unita:""
    },

  ];



  constructor(public http: HttpClient) {
    console.log('Hello Provider Provider');
  }




}
