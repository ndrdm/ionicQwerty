export class Lines {
  id: number;
  name: string;
  macchine: Macchine[];
}

export class Macchine {
  id: number;
  name: string;
  line: string;
  parametri: Parametri[];
}

export class Parametri {
  id: number;
  name: string;
  unita: string;
}
