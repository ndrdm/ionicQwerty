export class Lines {
  id: number;
  name: string;
  macchine: string;
}

export class Macchine {
  id: number;
  name: string;
  line: string;
  parametri: string;
}

export class Parametri {
  id: number;
  name: string;
  unita: string;
}


export class DataForm {
  linea: string;
  macchina: string;
  parametri:string [];

}
