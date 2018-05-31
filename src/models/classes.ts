import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

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

export class User {
  id: number;
  email: string;
  password: number;

  constructor(email: string, password: number) {
    this.email = email;
    this.password = password;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('saimon@devdactic.com', 4321);
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
