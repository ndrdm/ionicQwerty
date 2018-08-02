import {Component, EventEmitter} from '@angular/core';
import {AuthService} from "../../providers/auth-service/auth-service";
import {AlertController, Loading, LoadingController, NavController} from "ionic-angular";
import {MockDataProvider} from "../../providers/mock-data/mock-data";

import { HomePage } from "../../pages/home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  loading: Loading;

  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, private auth: AuthService, private provider: MockDataProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  /*public createAccount() {
    this.navCtrl.push('RegisterPage');
  }*/

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot(HomePage);
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
