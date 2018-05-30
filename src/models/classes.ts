export class Line {
  id: number;
  name: string;
  machine: string;
}

export class Machine {
  id: number;
  lineId: number;
  name: string;
  line: string;
  parameter: string;
}

export class Parameter {
  id: number;
  name: string;
  unit: string;
}


export class DataForm {
  line: string;
  machine: string;
  parameter: string[]
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;

}

